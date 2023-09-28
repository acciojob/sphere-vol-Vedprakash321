function volume_sphere(e) {
    //Write your code here
	e.preventDefault();

	const rad = document.getElementById("radius").value;
	
    const volum = (4/3) * 3.1415 * rad*rad*rad;
   const roundedNumber = volum.toFixed(4);
	
	const vol=document.getElementById("volume");
	vol.value=roundedNumber;
	
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
