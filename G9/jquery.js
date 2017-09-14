				
				//below is index
				$(function() {
				$('.firstNewsPost').click(function() {
				var clicks = $(this).data('clicks');
				if(!clicks) {
				$(".firstNewsPost").animate({height: "600px"}, 600 )
				
				$(".firstNewsPost").animate({width: '100%'})
				
				$("#secondNewsPost").hide();
				$("#thirdNewsPost").hide();
				$("#fourthNewsPost").hide();
				
				
				} else { $(".firstNewsPost").animate({height: '200px'})
				
				$(".firstNewsPost").animate({width: '100%'})
				
				$(".fourthNewsPost").show();
				$(".secondNewsPost").show();
				$(".thirdNewsPost").show();
				}
				$(this).data("clicks", !clicks);
				})
				});
		
				$(function() {
				$('.firstNewsPost').click(function() {
				$(this).find('div').slideToggle();
				})
				});
				
				$(function() {
				$('.secondNewsPost').click(function() {
				var clicks = $(this).data('clicks');
				if(!clicks) {
				$(".secondNewsPost").animate({height: "600px"}, 600 )
				
				$(".secondNewsPost").animate({width: '100%'})
				
				$("#thirdNewsPost").hide();
				$("#fourthNewsPost").hide();
				$("#firstNewsPost").hide();
				
				
				} else { $(".secondNewsPost").animate({height: '200px'})
				
				$(".secondNewsPost").animate({width: '100%'})
				
				$(".fourthNewsPost").show();
				$(".firstNewsPost").show();
				$(".thirdNewsPost").show();
				}
				$(this).data("clicks", !clicks);
				})
				});
		
				$(function() {
				$('.secondNewsPost').click(function() {
				$(this).find('div').slideToggle();
				})
				});
		 
				$(function() {
				$('.thirdNewsPost').click(function() {
				var clicks = $(this).data('clicks');
				if(!clicks) {
				$(".thirdNewsPost").animate({height: "600px"}, 600 )
				
				$(".thirdNewsPost").animate({width: '100%'})
				
				$("#secondNewsPost").hide();
				$("#thirdNewsPost").hide();
				$("#fourthNewsPost").hide();
				
				
				} else { $(".thirdNewsPost").animate({height: '200px'})
				
				$(".thirdNewsPost").animate({width: '100%'})
				
				$(".fourthNewsPost").show();
				$(".secondNewsPost").show();
				$(".thirdNewsPost").show();
				}
				$(this).data("clicks", !clicks);
				})
				});
		
				$(function() {
				$('.thirdNewsPost').click(function() {
				$(this).find('div').slideToggle();
				})
				});
		
				$(function() {
				$('.fourthNewsPost').click(function() {
				var clicks = $(this).data('clicks');
				if(!clicks) {
				$(".fourthNewsPost").animate({height: "600px"}, 600 )
				
				$(".fourthNewsPost").animate({width: '100%'})
				
				$("#secondNewsPost").hide();
				$("#thirdNewsPost").hide();
				$("#fourthNewsPost").hide();
				
				
				} else { $(".fourthNewsPost").animate({height: '200px'})
				
				$(".fourthNewsPost").animate({width: '100%'})
				
				$(".fourthNewsPost").show();
				$(".secondNewsPost").show();
				$(".thirdNewsPost").show();
				}
				$(this).data("clicks", !clicks);
				})
				});
		
				$(function() {
				$('.fourthNewsPost').click(function() {
				$(this).find('div').slideToggle();
				})
				});
				
				//Below is games
				
				$(function() {
				$('.MMO').click(function() {
				var clicks = $(this).data('clicks');
				if(!clicks) {
				$(".MMO").animate({height: "300px"}, 300 )} else { $(".MMO").animate({height: "15%"}, 120 )
				}
				$(this).data("clicks", !clicks);
				})
				});
		
				$(function() {
				$('.MMO').click(function() {
				$(this).find('div').slideToggle();
				})
				});
				
				$(function() {
				$('.MOBA').click(function() {
				var clicks = $(this).data('clicks');
				if(!clicks) {
				$(".MOBA").animate({height: "300px"}, 300 )} else { $(".MOBA").animate({height: "15%"}, 120 )
				}
				$(this).data("clicks", !clicks);
				})
				});
		
				$(function() {
				$('.MOBA').click(function() {
				$(this).find('div').slideToggle();
				})
				});
				
				$(function() {
				$('#RPG').click(function() {
				var clicks = $(this).data('clicks');
				if(!clicks) {
				$("#RPG").animate({height: "300px"}, 300 )} else { $("#RPG").animate({height: "15%"}, 120 )
				}
				$(this).data("clicks", !clicks);
				})
				});
		
				$(function() {
				$('#RPG').click(function() {
				$(this).find('div').slideToggle();
				})
				});
				
				$(function() {
				$('#BG').click(function() {
				var clicks = $(this).data('clicks');
				if(!clicks) {
				$("#BG").animate({height: "300px"}, 300 )} else { $("#BG").animate({height: "15%"}, 120 )
				}
				$(this).data("clicks", !clicks);
				})
				});
		
				$(function() {
				$('#BG').click(function() {
				$(this).find('div').slideToggle();
				})
				});
				
				// About us
				
				
				$(function() {
				$('.descriptionLeftAlex').click(function() {
				var clicks = $(this).data('clicks');
				if(!clicks) {
				$(".descriptionLeftAlex").animate({height: "300px", width: "100%"})
				
				
				$(".descriptionLeftMisha").hide();
				$("#descriptionRightSimran").hide();
				$("#descriptionRightDasha").hide();
				
				
				} else { $(".descriptionLeftAlex").animate({height: '18%', width: '40%'})
				
				
				$("#descriptionRightDasha").show();
				$(".descriptionLeftMisha").show();
				$("#descriptionRightSimran").show();
				}
				$(this).data("clicks", !clicks);
				})
				});
		
				$(function() {
				$('.descriptionLeftAlex').click(function() {
				$(this).find('div').slideToggle();
				})
				});
		
				$(function() {
				$('#descriptionRightDasha').click(function() {
				var clicks = $(this).data('clicks');
				if(!clicks) {
				$("#descriptionRightDasha").animate({height: "300px", width: '100%'})
				
				$(".descriptionLeftMisha").hide();
				$("#descriptionRightSimran").hide();
				$(".descriptionLeftAlex").hide();
				
				
				} else { $("#descriptionRightDasha").animate({height: '18%', width: '40%'})
				
				$("#descriptionRightSimran").show();
				$(".descriptionLeftAlex").show();
				$(".descriptionLeftMisha").show();
				}
				$(this).data("clicks", !clicks);
				})
				});
		
				$(function() {
				$('#descriptionRightDasha').click(function() {
				$(this).find('div').slideToggle();
				})
				});
		
				$(function() {
				$('#descriptionRightSimran').click(function() {
				var clicks = $(this).data('clicks');
				if(!clicks) {
				$("#descriptionRightSimran").animate({height: "300px", width: '100%'})
				
				$(".descriptionLeftMisha").hide();
				$("#descriptionRightDasha").hide();
				$(".descriptionLeftAlex").hide();
				
				
				} else { $("#descriptionRightSimran").animate({height: '18%', width: '40%'})
				
				$("#descriptionRightDasha").show();
				$(".descriptionLeftAlex").show();
				$(".descriptionLeftMisha").show();
				}
				$(this).data("clicks", !clicks);
				})
				});
		
				$(function() {
				$('#descriptionRightSimran').click(function() {
				$(this).find('div').slideToggle();
				})
				});
		
				$(function() {
				$('.descriptionLeftMisha').click(function() {
				var clicks = $(this).data('clicks');
				if(!clicks) {
				$(".descriptionLeftMisha").animate({height: "300px", width: '100%'}, 300 )
				
				
				$("#descriptionRightDasha").hide();
				$("#descriptionRightSimran").hide();
				$(".descriptionLeftAlex").hide();
				
				
				} else { $(".descriptionLeftMisha").animate({height: '18%', width: '40%'})
				
				
				$("#descriptionRightSimran").show();
				$(".descriptionLeftAlex").show();
				$("#descriptionRightDasha").show();
				}
				$(this).data("clicks", !clicks);
				})
				});
		
				$(function() {
				$('.descriptionLeftMisha').click(function() {
				$(this).find('div').slideToggle();
				})
				});
		
