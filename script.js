function volume_sphere(e) {
    //Write your code here
	e.preventDefault();
	const pi = Math.PI;
	const rad = document.getElementById("radius").value;
	
    const volum = (4/3) * pi * rad*rad*rad;
    // return volum;
	
	const vol=document.getElementById("volume");
	vol.value=volum;
	
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
