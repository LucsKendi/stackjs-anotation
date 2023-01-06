const name = "Lucas";
const gender = "Male";
const age = 60;
const contribution = 35;
const contributionCalculation = age + contribution;


if (gender == "Male") {
    if (contribution >= 35 && contributionCalculation >= 95 ) {
      console.log(name + " pode se aposentar")
    } else {
        console.log(name + " não pode se aposentar")
      // Condição 1 passou, porém condição 2 não passou
    }
  } else {
    if(gender == "Female") {
        if(contribution >= 30 && contributionCalculation >= 85) {
            console.log(name + " pode se aposentar")
        } else {
            console.log(name + " não pode se aposentar")
            // Condição 1 passou, porém condição 2 não passou
        }

    } else {
        console.log("Opção inválida.")
    }
    // Condição 1 não passou
  }