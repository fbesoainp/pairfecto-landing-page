"use server"

export async function submitEmail(email: string) {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbx0fZcbfm6jFWelloNr2EYeqxFtMBxk_GxcA3-33TbMSB9EV_LJKdS6xav2a8jyKfGwOg/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "email=" + encodeURIComponent(email),
      },
    )

    if (!response.ok) {
      throw new Error("Failed to submit")
    }

    return { success: true }
  } catch (error) {
    return { success: false }
  }
}

