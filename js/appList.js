$(document).ready(function(){
		
			$('#titleBox').focus();
		
		

			$('#accordion').accordion();
			
			// $('#accordion-resizer').resizable({minHeight:240,
			// minWidth: 300, resize: function() {
			// $('#accordion').accordion( "refresh" );
			// }
			// });
			
			$('#datepicker').datepicker();

			$("#txtNote").keypress(
					function(e) {
						if ((e.which && e.which == 13)
								|| (e.keyCode && e.keyCode == 13)) {

							if ($('#titleBox').val() == ('')
									|| ($('#txtNote').val() === (''))) {
								alert('Fields can not be blank!. ');
							} else {

								 var day = $.datepicker.formatDate('mm-dd-yy ',new Date());

								//var date = new Date();
								//date.getTime.formatDate('mm-dd-yy;');
								var x = '0';
								$('#accordion').append(
										'<h3 id=' + x +'><div id='+(x+1)+'>' + day + '<br>' + 'Title:'+ 
												+ ($('#titleBox').val())
												+ "         " + '</h3>'
												+ '<div>' + '<p>' + "Note:  "+ '<br>'+
												+ ($('#txtNote').val())
												+ '</p> </div>');
												x=x+2;
								$('#accordion').accordion('destroy');
								$('#accordion').accordion();
								$('#txtNote').val("");
								$('#titleBox').val("");

								alert('Your Note was Successfully added');
								 

 

								$('#titleBox').focus();

							}

						}

					});
			$('#removeBtn').click(function() {
				$('#accordion').accordion('option', 'active');
				//var del = $('#accordion').accordion('getSelected');
				$('#accordion').empty();
				
				
				$('#accordion').accordion('destroy');
				$('#accordion').accordion();
				
				//window.location.reload(true);;
				

				alert(" All Notes have been removed! ");

			});
		
		});
		
		
