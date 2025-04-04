

---

# 🚀 QueryLens

**QueryLens** is an **AI-powered SQL Query Visualization Agent** that bridges the gap between natural language questions and data visualization. Users can upload a SQLite database or CSV file, ask questions about the data in natural language, and receive **insightful visual representations** in response. The agent generates a SQL query, executes it, and formats the results into a visual representation.

---

## 🏗️ Architecture

The architecture of **QueryLens** is designed to make data exploration intuitive and efficient. Here's how it works:

![image](https://github.com/user-attachments/assets/450f8496-ab8b-432b-abed-14f202da4b0d)

---

### 1. **👤 User Interaction**
   - Users interact with the system by:
     - Uploading a **CSV file** or **SQLite database**.
     - Asking questions in **natural language** (e.g., *"Show me total sales by region for the last quarter"*).
   - The frontend captures the input and sends it to the **SQL Agent** for processing.

---

### 2. **🖥️ Frontend**
   - The frontend handles:
     - **File uploads** (CSV or SQLite).
     - **Displaying visualizations** (charts, graphs, etc.).
     - Showing **formatted data** and **natural language responses**.
   - It communicates with the **SQL Agent** via the **LangGraph API**.

---

### 3. **🤖 SQL Agent (LangGraph API)**
   - The **SQL Agent** is the brain of the system, built using **LangGraph**.
   - It processes the user's question through the following steps:
     1. **🔍 Parse Question**: Analyzes the question and identifies relevant tables and columns.
     2. **📝 Generate SQL**: Creates an optimized SQL query based on the question and database schema.
     3. **✅ Validate and Fix SQL**: Ensures the query is valid and correct.
     4. **⚡ Execute SQL**: Runs the query on the database.
     5. **📊 Choose Visualization**: Selects the best visualization type (e.g., bar, line, pie).
     6. **📄 Format Results**: Formats the results into a human-readable response and prepares data for visualization.

---

### 4. **🗄️ SQLite Server**
   - The **SQLite Server** handles all database operations.
   - It supports:
     - **File uploads** (SQLite or CSV).
     - **Executing SQL queries** generated by the agent.
   - Ensures the database is accessible and queries are executed efficiently.

---

### 5. **📤 Data Flow**
   - The user's question is sent to the **SQL Agent** via the **LangGraph API**.
   - The agent processes the question, generates a SQL query, and executes it on the **SQLite Server**.
   - The results are formatted and sent back to the frontend for visualization.

---

### 6. **📊 Visualization**
   - The frontend uses **prebuilt graph templates** to render the data in an intuitive and interactive format.
   - Users can:
     - View the visualization alongside the natural language response.
     - Inspect the agent's internal state through **traces** provided by LangGraph.

---

This architecture ensures a **seamless workflow** from natural language questions to insightful visualizations, making data exploration **intuitive and efficient**.

---

## 🛠️ Getting Started

### Prerequisites

1. **Install Docker**: Follow the official [Docker installation guide](https://docs.docker.com/get-docker/).
2. **Install LangGraph Studio**: Follow the [LangGraph Studio setup guide](https://langchain.ai/docs/langgraph-studio).

---

## 🎯 Usage

1. **Upload a Database or CSV File**:
   - Upload a SQLite database or CSV file (under 1MB) through the frontend.

2. **Ask a Question**:
   - Type or speak your question in natural language, e.g., *"Show me total sales by region for the last quarter."*

3. **View Results**:
   - The system will:
     - Generate a SQL query.
     - Execute it.
     - Display the results as a **visualization**.
   - You can also inspect the agent's internal state through the provided **traces**.

---

## 🙏 Acknowledgments

- Thanks to [LangGraph](https://langchain.ai/docs/langgraph) for providing the framework for building complex AI agents.
- Inspired by tools like [V0 by Vercel](https://v0.dev/) and [Tableau](https://www.tableau.com/).

---

Let’s make data exploration **smarter and more accessible** with **QueryLens**! 🚀

---

