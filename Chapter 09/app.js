/*
TODO: Selecting Elements
    getElementById()
    Returns the Element as an object or null if not found.)

-------------------------------------------------------
TODO: Selecting Elements
    getElementsByClassName()
    Returns a collection of elements with the specified class name as an object.
    (HTMLCollection) (live collection)

-------------------------------------------------------
TODO: Selecting Elements
    getElementsByTagName()
    Returns a collection of elements with the specified tag name as an object.
    (HTMLCollection) (live collection)
    (HTMLCollection) (live collection)
*/

imageObj = document.getElementById("mainImg");
console.log(imageObj); // <img id="mainImg" src="images/1.jpg" alt="Image 1" width="300" height="200">

//Selecting Elements
imageObj2 = document.getElementsByClassName("mainImg");



//getElementByTagName()
imageObj3 = document.getElementsByTagName("img");
console.log(imageObj3); // [img#mainImg.mainImg, img#mainImg2.mainImg2]
console.dir(imageObj3); // HTMLCollection(2) [img#mainImg.mainImg, img#mainImg2.mainImg2]