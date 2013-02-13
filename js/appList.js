$(document).ready(
		function() {
		$('#taskBox').focus();
		var x = '0';
		
			
			$('#accordion').accordion( {
				heightStyle : "content"
			});
			
			// $('#accordion-resizer').resizable({minHeight:240,
			// minWidth: 300, resize: function() {
			// $('#accordion').accordion( "refresh" );
			// }
			// });
			
			$('#datepicker').datepicker();
			
			$("#addBtn").click(function() {
						
							if ($('#taskBox').val() == ('')
									|| ($('#taskNote').val() === (''))) {
								alert('Fields can not be blank!. ');
							} else
								{

								 var day = $.datepicker.formatDate('mm-dd-yy ',new Date());

								

								$('#accordion').append(
										'<h3 id=' + x +'>'+ '<p>'+'Date Created: ' + day + ' <br>  ' + 'Task Name:'+ '   '+ 
												($('#taskBox').val()) + '</p></h3>'
												+ '<div id ='+(x+1)+'>' + '<p><b>' + 'Task Description:  '+'</b>' + '<br>'
												+ ($('#taskNote').val())
												+ '</p> </div>');
												x=x+2;
												 
												
								$('#accordion').accordion('destroy');
								$('#accordion').accordion();
								$('#taskNote').val("");
								$('#taskBox').val("");

							
 

								$('#taskBox').focus();
								

							};

						

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
			
			$('#accordion').dblclick (function(){
			
								
			});
		
		
				
		});