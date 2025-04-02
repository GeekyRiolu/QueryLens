from langchain_community.vectorstores import FAISS
from langchain_openai import OpenAIEmbeddings
from langchain_core.prompts import ChatPromptTemplate
from my_agent.LLMManager import LLMManager

class SemanticSearchAgent:
    def __init__(self):
        self.llm_manager = LLMManager()
        self.embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
        self.vectorstore = None  # Initialize with load_vectorstore()

    def load_vectorstore(self, documents: list[str]):
        """Create/load a vector store from documents"""
        self.vectorstore = FAISS.from_texts(documents, self.embeddings)

    def semantic_search(self, query: str, k: int = 3) -> list[str]:
        """Find top-k most relevant documents"""
        docs = self.vectorstore.similarity_search(query, k=k)
        return [doc.page_content for doc in docs]

    def augmented_generation(self, state: dict) -> dict:
        """Enhance SQL generation with semantic context"""
        question = state['question']
        relevant_docs = self.semantic_search(question)
        
        prompt = ChatPromptTemplate.from_messages([
            ("system", """Use these database docs to improve SQL accuracy:
            {docs}
            
            Follow the same SQL rules as before."""),
            ("human", "Question: {question}\nSchema: {schema}")
        ])
        
        response = self.llm_manager.invoke(
            prompt, 
            docs=relevant_docs,
            question=question,
            schema=state.get('schema', '')
        )
        return {"augmented_sql": response}