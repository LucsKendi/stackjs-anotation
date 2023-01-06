const namae = "Lucas";
const gender = "Male";
const age = 60;
const contribution = 35;
const calcContribution = age + contribution;


if (gender == "Male") {
    if (contribution >= 35 && calcContribution >= 95 ) {
      console.log(namae + " pode se aposentar")
    } else {
        console.log(namae + " não pode se aposentar")
      // Condição 1 passou, porém condição 2 não passou
    }
  } else {
    if(gender == "Female") {
        if(contribution >= 30 && calcContribution >= 85) {
            console.log(namae + " pode se aposentar")
        } else {
            console.log(namae + " não pode se aposentar")
            // Condição 1 passou, porém condição 2 não passou
        }

    } else {

    }
    // Condição 1 não passou
  }