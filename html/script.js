document.getElementById("infoForm").addEventListener("submit", function(event) 
{
    event.preventDefault();

    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var phone = document.getElementById("phone").value;
    var symptoms = document.getElementById("symptoms").value;

    alert(
        "Full Name: " + name + "\n" +
        "Age: " + age + "\n" +
        "Phone Number: " + phone + "\n" +
        "Symptoms: " + symptoms
    );
}); 