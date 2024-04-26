export const createTodo = async (task: string) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND}/todo/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task,
      }),
      credentials: "include",
    });
    const response = await res.json();
    return response;
  } catch (err) {
    console.error("Error while creating todo", err);
    return { success: false };
  }
};
export const editTodo = async (id: string, newTask: string) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND}/todo/updateTodo`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, task: newTask }),
      credentials: "include",
    });
    const response = await res.json();
    return response;
  } catch (err) {
    console.error("Error while editing todo", err);
    return { success: false };
  }
};
export const editState = async (id: string, state: boolean) => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND}/todo/updateStatus`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, state }),
        credentials: "include",
      }
    );
    const response = await res.json();
    return response;
  } catch (err) {
    console.error("Error while marking the todo as done", err);
    return { success: false };
  }
};
export const editOrder = async (id: string, order: number) => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND}/todo/updateOrder/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ order }),
        credentials: "include",
      }
    );
    const response = await res.json();
    return response;
  } catch (err) {
    console.error("Error while updating the order of the todo", err);
  }
};
export const deleteTodo = async (id: string) => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND}/todo/delete/${id}`,
      {
        method: "DELETE",
        credentials: "include",
      }
    );
    const response = await res.json();
    return response;
  } catch (err) {
    console.error("Error while deleting todo", err);
    return { success: false };
  }
};
