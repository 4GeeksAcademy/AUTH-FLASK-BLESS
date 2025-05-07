
// Get the backend URL from environment variables
const backendUrl = import.meta.env.VITE_BACKEND_URL;

// Check if the backend URL is defined
if (!backendUrl) {
    throw new Error("VITE_BACKEND_URL is not defined in .env file");
}

export const createSignup = async (dispatch, info) => {
    try{
    const response = await fetch(`${backendUrl}/signup`,
        {
            method: "POST",
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify(info)
        }
    );
    if(response.status === 201) {
        const data = await response.json()
        dispatch({type: "signup", payload:data.user})
    } else {
        const errorData = await response.json();
        console.error("Signup failed:", errorData);
        alert(errorData.Msg)
        return {
            error: true, 
        }
    }
} catch (error) {
    console.error("Network error:", error);
}
};