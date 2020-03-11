const testFile = ['./state_array_test.js', './state_object_test.js'];

testFile.forEach((file) => {
    console.log("================ Testing : " + file + "======================\n");
    require(file);
    console.log("================ Testied : " + file + "======================\n\n");
    
    console.log("-");
    console.log("-");
})