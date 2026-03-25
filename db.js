import { supabase } from './supabase.js'

// HANDLE FORM SUBMIT
const form = document.querySelector("#contact-form")

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const name = document.querySelector("#name").value
    const email = document.querySelector("#email").value
    const message = document.querySelector("#message").value

    const { data, error } = await supabase
      .from('contacts')
      .insert([{ name, email, message }])

    if (error) {
      alert("Error: " + error.message)
    } else {
      alert("Message sent successfully!")
      form.reset()
    }
  })
}
