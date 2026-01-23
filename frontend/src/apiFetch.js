// The base URL should be an environment variable, but hardcoded for this example.
export const API_BASE_URL = 'http://127.0.0.1:8000';

export async function apiFetch(url, options = {} ) {
  // Set up the final options for the fetch call.
  // This correctly includes the method, headers, body, etc.
  const mergedOptions = {
    ...options, // Includes method, body, etc. from the user
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  };

  try {
    const response = await fetch(`${API_BASE_URL}/${url}`, mergedOptions);

    // Centralized error handling: check if the response was successful.
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`API Error: ${response.status} - ${errorData.message || response.statusText}`);
    }

    // Handle responses with no content (e.g., a successful DELETE request).
    if (response.status === 204) {
      return null;
    }

    // If successful, parse the JSON and return the data directly.
    return await response.json();

  } catch (error) {
    console.error("apiFetch failed:", error);
    // Re-throw the error so the calling component knows the request failed.
    throw error;
  }
}
