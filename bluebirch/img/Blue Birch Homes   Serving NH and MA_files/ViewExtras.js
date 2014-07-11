function  ViewPhoto(mls,n,aid)
	{
		h=550;
		if ((screen.height) > 610)
			{
				h=700;
				
			}
		w=580;
		myscroll="yes";
	    mypage = "details.asp?viewphoto=yes&mls=" + mls + "&n=" + n + "&aid=" + aid;
		myname = "big";
		myresize = "yes";
		LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
		TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
		settings = 'height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+myscroll +',resizable='+myresize ;
		win = window.open(mypage,myname,settings)
	
	}
	
function  ViewTour(TheLink, TheHeight, TheWidth)
		{
			if (TheHeight)
				{
					h=TheHeight;
				}
			else
				{
					h=550;
				}
			
			if (TheWidth)
				{
					w=TheWidth;
				}
			else
				{
					w=550;
				}
			
			myscroll = "yes";
		    mypage = TheLink;
			myname = "big" + w + h;
			myresize = "yes";
			LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
			TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
			settings = 'height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+myscroll +',resizable='+myresize ;
			win = window.open(mypage,myname,settings);
			win.focus();
			
		}