const Name = document.getElementById("name");
const Age = document.getElementById("age");
const Gender = document.getElementById("gender");
const Locations = document.getElementById("location");
const Email = document.getElementById("email");
const Phone = document.getElementById("phone");
const SubmitForm = document.getElementById("submitForm");

SubmitForm.addEventListener("click", async (e) => {
    e.preventDefault();
    if(!Name.value.trim() || !Age.value.trim() || !Gender.value.trim() || !Locations.value.trim() || !Email.value.trim() || !Phone.value.trim()){
        alert('All Fields are Mandory'); //Stop the function execution
        return;
    };
    if (!Email.value.trim() || !Email.value.includes("@")) {
        alert("Please Enter valid Email");
        return;
    }
    const obj = {
        name: Name.value,
        age: Age.value,
        gender: Gender.value,
        location: Locations.value,
        email: Email.value,
        phone: Phone.value,
    };
    try {
        const response = await fetch(`/api/contact`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(obj)
        });
        // Resetting form to its initial state
        SubmitForm.form.reset();

    } catch (error) {
        console.error('An error occurred:', error);
    }

});