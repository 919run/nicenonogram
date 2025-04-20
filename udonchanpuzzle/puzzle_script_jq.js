$(document).ready(function(){

	$(document).bind("contextmenu", function(e){ return false; });

	const picpix = [6, 7, 30, 54, 78, 102, 32, 56, 81, 82, 83, 84, 85, 86, 87, 88, 65, 41, 18, 19, 43, 67, 91, 115, 140, 165, 166, 190, 215, 194, 171, 147, 148, 125, 149, 173, 197, 221, 245, 269, 293, 317, 341, 365, 390, 415, 440, 441, 442, 467, 468, 469, 470, 447, 448, 449, 426, 403, 380, 356, 332, 308, 284, 260, 236, 212, 188, 164, 246, 223, 224, 248, 225, 226, 227, 251, 274, 297, 228, 205, 206, 230, 254, 231, 232, 256, 233, 234, 258, 235, 298, 322, 321, 303, 304, 328, 327, 395, 396, 397, 398];

	const hints = [19, 32, 80, 88, 102, 147, 166, 194, 205, 223, 254, 258, 274, 321, 365, 380, 403, 415, 440, 447];

	cp_count = 0;

	ucp_count = 0;

	clear = false;

	//creating table

	for(var i = 0; i < 20; i++) {

		$("#picture_table").append("<tr></tr>");

	}

	for(var n = 0; n < 24; n++) {


		$("#picture_table tr").append("<th></th>");

	}

	//indexing pixels

	$("#picture_table tr th").each(function(pi){

		pi++;

		$(this).text(pi);

		$(this).attr("id",pi);

	});

	//setting hints

	for(var l = 0; l < picpix.length; l++) {

		for(var k = 0; k < hints.length; k++) {

			if(hints[k] == picpix[l]){

				$("#"+hints[k]).css({"background-color":"green"});
			}

		} 

	}


	//pixels click functions

	$("#picture_table th").click(function(){

		pe = false;

		id = $(this).attr("id");

		pxid = parseInt(id);

		if(clear != true) {

			if($(this).css("background-color") != "rgb(255, 75, 168)") {

				//marking the pixel

				$(this).css({"background-color":"#ff4ba8"});

				//counting filled and empty pixels

				for(var n = 0; n < picpix.length; n++) {

					if(pxid == picpix[n]) {

						pe = true;

					} 

				}

				if(pe == true) {

					cp_count = parseInt($("#cp_count").text())+1;

					$("#cp_count").text(cp_count);

				} else {

					ucp_count = parseInt($("#ucp_count").text())+1;

					$("#ucp_count").text(ucp_count);

				}

				pe = false;

			} else {

				//unmarking the pixel

				$(this).css({"background":""});

				//counting filled and empty pixels

				for(var n = 0; n < picpix.length; n++) {

					if(pxid == picpix[n]) {

						pe = true;

					} 

				}

				if(pe == true) {

					cp_count = parseInt($("#cp_count").text())-1;

					$("#cp_count").text(cp_count);

				} else {

					ucp_count = parseInt($("#ucp_count").text())-1;

					$("#ucp_count").text(ucp_count);

				}

				pe = false;

			}

			//checking if all clear

			if(cp_count == 101 && ucp_count == 0) {

				clear = true;

				$("#picture_table th").css({"background-color":"aliceblue"});

				colorize();

				$("#picture_table th").animate({borderWidth: "0px"}, 800);
				$("#genius").animate({opacity: 1}, 3000);

				$("#info_container").animate({opacity: 0}, 2000);
				$("#pp_count_outer").animate({opacity: 0}, 2000);
				$("#column_table").animate({opacity: 0}, 2000);
				$("#row_table").animate({opacity: 0}, 2000);
				$("#top_buttons").animate({opacity: 0}, 2000);
				
			}

		}

	});

	//pixel count toggle button

	$("#pp_toggle_button").click(function(){

		$("#info_container").toggle();

	});

	//right click

	$("#picture_table th").mousedown(function(e){ 

		if(clear != true) {

			if( e.button == 2 ) { 

				//if marked pixel is clicked

				if($(this).css("background-color") == "rgb(255, 75, 168)") {

					pe = false;

					id = $(this).attr("id");

					pxid = parseInt(id);

					//counting filled and empty pixels

					for(var n = 0; n < picpix.length; n++) {

						if(pxid == picpix[n]) {

							pe = true;

						} 

					}

					if(pe == true) {

						cp_count = parseInt($("#cp_count").text())-1;

						$("#cp_count").text(cp_count);

					} else {

						ucp_count = parseInt($("#ucp_count").text())-1;

						$("#ucp_count").text(ucp_count);

					}

					pe = false;

				}

				//setting unfilled mark

				if($(this).css("background-color") != "rgba(195, 195, 255, 0.98)") {

					$(this).css({"background-color":"rgba(195, 195, 255, 0.98)"});

				} else {

					$(this).css({"background-color":""});

				}

			} 

		}

	return true; 

	}); 

});

//colorize picture function

function colorize() {

const hair_color = [6, 7, 18, 19, 30, 31, 32, 41, 42, 43, 54, 55, 56, 65, 66, 67, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 102, 
	103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140,
	147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 171, 173, 174, 175, 176, 177, 178, 179, 180,
	181, 182, 183, 184, 185, 186, 187, 188, 190, 194, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 215, 221, 222, 223,
	224, 225, 226, 227, 228, 230, 231, 232, 233, 234, 235, 236, 245, 246, 248, 251, 254, 256, 258, 260, 274, 297];

	const eyes_color = [298, 303, 304, 321, 322, 327, 328];

	const lips_color = [395, 396, 397, 398];

	const skin_color = [229, 247, 249, 250, 252, 253, 255, 257, 259, 269, 270, 271, 272, 273, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 293, 294, 295, 296,
	299, 300, 301, 302, 305, 306, 307, 308, 317, 318, 319, 320, 323, 324, 325, 326, 329, 330, 331, 332, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350,
	351, 352, 353, 354, 355, 356, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 390, 391, 392, 393, 394, 399, 400, 401,
	402, 403, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 467, 468, 469, 470];

	for(var hcipix = 0; hcipix < hair_color.length; hcipix++) {

		$("#"+hair_color[hcipix]).css({"background": "#ffa8ea"});

	}

	for(var ecipix = 0; ecipix < eyes_color.length; ecipix++) {

		$("#"+eyes_color[ecipix]).css({"background": "#f761a4"});

	}

 	for(var lcipix = 0; lcipix < lips_color.length; lcipix++) {

		$("#"+lips_color[lcipix]).css({"background": "#fb7599"});

	}

 	for(var scipix = 0; scipix < skin_color.length; scipix++) {

		$("#"+skin_color[scipix]).css({"background": "#f7e9c4"});

	}

}
