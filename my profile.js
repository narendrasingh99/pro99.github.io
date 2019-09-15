
		/*Skill Content part*/

		$(document).ready(function(){
			
			$("#php").click(function(){

				$("#jq").css({"color":""})
				$("#sql").css({"color":""})
				$("#js").css({"color":""})
				$("#boot").css({"color":""})
				$("#html").css({"color":""})
				$("#css").css({"color":""})
				$("#php").css({"color":"skyblue"})

				$("#abt_php").css({"display":"none"}).fadeIn(500)
				$("#abt_js").css({"display":"none"})
				$("#abt_jq").css({"display":"none"})
				$("#abt_sql").css({"display":"none"})
				$("#abt_boot").css({"display":"none"})
				$("#abt_html").css({"display":"none"})
				$("#abt_css").css({"display":"none"})

					
			})
			
			$("#js").click(function(){
				$("#php").css({"color":""})
				$("#jq").css({"color":""})
				$("#sql").css({"color":""})
				$("#boot").css({"color":""})
				$("#html").css({"color":""})
				$("#css").css({"color":""})
				$("#js").css({"color":"skyblue"})



				$("#abt_js").css("display","none").fadeIn(500)
				$("#abt_php").css({"display":"none"})
				$("#abt_jq").css({"display":"none"})
				$("#abt_sql").css({"display":"none"})
				$("#abt_boot").css({"display":"none"})
				$("#abt_html").css({"display":"none"})
				$("#abt_php").css({"display":"none"})
			})
			$("#jq").click(function(){
				$("#php").css({"color":""})
				$("#js").css({"color":""})
				$("#sql").css({"color":""})
				$("#boot").css({"color":""})
				$("#html").css({"color":""})
				$("#css").css({"color":""})
				$("#jq").css({"color":"skyblue"})

				$("#abt_jq").css("display","none").fadeIn(500)
				$("#abt_js").css({"display":"none"})
				$("#abt_sql").css({"display":"none"})
				$("#abt_php").css({"display":"none"})
				$("#abt_boot").css({"display":"none"})
				$("#abt_css").css({"display":"none"})
				$("#abt_html").css({"display":"none"})
			})
			$("#boot").click(function(){
				$("#php").css({"color":""})
				$("#js").css({"color":""})
				$("#sql").css({"color":""})
				$("#jq").css({"color":""})
				$("#html").css({"color":""})
				$("#css").css({"color":""})
				$("#boot").css({"color":"skyblue"})


				$("#abt_boot").css("display","none").fadeIn(500)
				$("#abt_js").css({"display":"none"})
				$("#abt_sql").css({"display":"none"})
				$("#abt_jq").css({"display":"none"})
				$("#abt_css").css({"display":"none"})
				$("#abt_html").css({"display":"none"})
				$("#abt_php").css({"display":"none"})
			})
			$("#css").click(function(){

				$("#php").css({"color":""})
				$("#js").css({"color":""})
				$("#jq").css({"color":""})
				$("#html").css({"color":""})
				$("#sql").css({"color":""})
				$("#boot").css({"color":""})
				$("#css").css({"color":"skyblue"})

				$("#abt_css").css("display","none").fadeIn(500)
				$("#abt_js").css({"display":"none"})
				$("#abt_jq").css({"display":"none"})
				$("#abt_sql").css({"display":"none"})
				$("#abt_php").css({"display":"none"})
				$("#abt_boot").css({"display":"none"})
				$("#abt_html").css({"display":"none"})

			})
			$("#html").click(function(){
				$("#php").css({"color":""})
				$("#js").css({"color":""})
				$("#jq").css({"color":""})
				$("#boot").css({"color":""})
				$("#sql").css({"color":""})
				$("#css").css({"color":""})
				$("#html").css({"color":"skyblue"})

				$("#abt_html").css("display","none").fadeIn(500)
				$("#abt_js").css({"display":"none"})
				$("#abt_jq").css({"display":"none"})
				$("#abt_php").css({"display":"none"})
				$("#abt_boot").css({"display":"none"})
				$("#abt_css").css({"display":"none"})
				$("#abt_sql").css({"display":"none"})


			})
			$("#sql").click(function(){
				$("#php").css({"color":""})
				$("#js").css({"color":""})
				$("#jq").css({"color":""})
				$("#boot").css({"color":""})
				$("#html").css({"color":""})
				$("#css").css({"color":""})
				$("#sql").css({"color":"skyblue"})

				$("#abt_sql").css("display","none").fadeIn(500)
				$("#abt_js").css({"display":"none"})
				$("#abt_jq").css({"display":"none"})
				$("#abt_php").css({"display":"none"})
				$("#abt_boot").css({"display":"none"})
				$("#abt_css").css({"display":"none"})
				$("#abt_html").css({"display":"none"})


			})
			
			
		})
			$(window).scroll(function (event) {
    			var scroll = $(window).scrollTop();

    			if(scroll==0)
    			{
    				$(".logo").css({"transform":"rotate(360deg)","transition":"1s"})
    			}
    			
			});
			
			$(window).scroll(function (event) {
    			var sc2 = $(window).scrollTop();

    			if(sc2==1390)
    			{
    				/*$("#roun").css("color","white")*/
    				alert(scd)
    			}
    			
			});
		
			$(document).ready(function(){

				$("#abt_html").css("display","block");
				$("#html").css("color","skyblue");
				$("#abt_boot").css("display","none");

			})

