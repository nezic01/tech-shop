<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Uzimamo podatke iz forme
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $description = htmlspecialchars($_POST['description']);

    // Email adresa prodavnice (promijeni svojom)
    $to = "youremail@example.com";
    $subject = "New Product Inquiry from $name";
    $message = "You have received a new inquiry:\n\n";
    $message .= "Name: $name\n";
    $message .= "Email: $email\n\n";
    $message .= "Product Description:\n$description\n";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Ako imaš mail server (npr. XAMPP s konfiguriranim sendmail)
    if (mail($to, $subject, $message, $headers)) {
        echo "<h3>Thank you, $name! Your message has been sent successfully.</h3>";
    } else {
        echo "<h3>Sorry, there was a problem sending your message.</h3>";
    }
}
?>
