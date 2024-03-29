const Name = document.getElementById("name");
const Age = document.getElementById("age");
const Gender = document.getElementById("gender");
const Locations = document.getElementById("location");
const Email = document.getElementById("email");
const Phone = document.getElementById("phone");
const SubmitForm = document.getElementById("submitForm");

SubmitForm.addEventListener("click", async (e) => {
    e.preventDefault();
    if(!Name.value || !Age.value || !Gender.value || !Locations.value || !Email.value || !Phone.value){
        alert('All Fields are Mandory'); 
        return;
    };
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
        SubmitForm.form.reset();

    } catch (error) {
        console.error('An error occurred:', error);
    }

});