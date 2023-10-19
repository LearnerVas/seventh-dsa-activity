var inputpass = prompt("enter password");
const password = "p@ssw0rd@2023";
if (inputpass.length >= 8 || inputpass.includes("p@ssw0rd@2023")) {
  console.log("Valid password");
} 

else {
  console.log("Invalid password");
}
