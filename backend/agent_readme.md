
---

## ✨ Features

**QueryLens** comes packed with powerful features to make data exploration seamless and intuitive:

- **🔍 SQL Query Generation & Validation**: Automatically generates and validates SQL queries from natural language questions.
- **⚡ Query Execution & Result Formatting**: Executes queries and formats results into human-readable responses.
- **📊 Visualization Recommendation & Data Formatting**: Recommends the best visualization type and formats data for rendering.
- **🌐 Streaming LangGraph State**: Provides real-time updates and traces of the agent's internal state for better debugging and insights.

---

## 🛠️ Main Components

The core of **QueryLens** is built around the following components:

---

### 1. **📂 WorkflowManager**

The `WorkflowManager` class is the backbone of the system, responsible for creating and managing the workflow of the SQL agent. It uses LangGraph's `StateGraph` to define the sequence of operations.

**Key Methods**:
- **`create_workflow()`**: Sets up the workflow graph with various nodes and edges.
- **`run_sql_agent()`**: Executes the entire workflow for a given question.

---

### 2. **🤖 SQLAgent**

The `SQLAgent` class (not shown in the provided code) implements the individual steps in the workflow, such as:

- **🔍 Parsing Questions**: Analyzes the user's question to identify relevant tables and columns.
- **📝 Generating SQL Queries**: Creates optimized SQL queries based on the question and database schema.
- **✅ Validating & Fixing SQL**: Ensures the query is valid and correct.
- **⚡ Executing SQL Queries**: Runs the query on the database and retrieves results.
- **📊 Choosing Visualizations**: Recommends the best visualization type for the data.

---

### 3. **📄 DataFormatter**

The `DataFormatter` class is responsible for preparing the data for visualization.

**Key Methods**:
- **`format_data_for_visualization()`**: Formats the query results for the chosen visualization type (e.g., bar, line, pie).

---

## 🚀 How It All Works Together

1. The **WorkflowManager** orchestrates the entire process, defining the sequence of operations.
2. The **SQLAgent** handles the core logic, from parsing questions to executing queries and choosing visualizations.
3. The **DataFormatter** ensures the data is ready for rendering in the frontend.

---

This modular and interactive design ensures that **QueryLens** is both powerful and easy to use, making data exploration a breeze! 🚀

---
