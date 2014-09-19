var expect = chai.expect;

describe( 'MainTest', function () {

  it( 'calculateRegularScoreTest', function () {
	  
	  
	 var frames = [{R1:'5',R2:'4',R3:null},
	               {R1:'5',R2:'4',R3:null},
	               {R1:'X',R2:null,R3:null},
	               {R1:'5',R2:'S',R3:null},
	               {R1:'5',R2:'4',R3:null},
	               {R1:'0',R2:'0',R3:null},
	               {R1:'5',R2:'4',R3:null},
	               {R1:'5',R2:'4',R3:null},
	               {R1:'5',R2:'4',R3:null},
	               {R1:'5',R2:'S',R3:'4'}];
	 
    var finalScore = calculateRegular(frames);
    expect( finalScore ).to.equal( 103 );
  });
  
  it( 'calculateAPerfectGameScore', function () {
	  
		  
		 var frames = [{R1:'X',R2:null,R3:null},
		               {R1:'X',R2:null,R3:null},
		               {R1:'X',R2:null,R3:null},
		               {R1:'X',R2:null,R3:null},
		               {R1:'X',R2:null,R3:null},
		               {R1:'X',R2:null,R3:null},
		               {R1:'X',R2:null,R3:null},
		               {R1:'X',R2:null,R3:null},
		               {R1:'X',R2:null,R3:null},
		               {R1:'X',R2:'X',R3:'X'}];
		 
	    var finalScore = calculateRegular(frames);
	    expect( finalScore ).to.equal( 300 );
	  });
  
  it( 'calculateAllSpare', function () {
	  
		//var frames = ['5','4','5','4','X','5','S','5','4','0','0','5','4','5','4','5','4','5','S','4']
		  
		 var frames = [{R1:'1',R2:'S',R3:null},
		               {R1:'1',R2:'S',R3:null},
		               {R1:'1',R2:'S',R3:null},
		               {R1:'1',R2:'S',R3:null},
		               {R1:'1',R2:'S',R3:null},
		               {R1:'1',R2:'S',R3:null},
		               {R1:'1',R2:'S',R3:null},
		               {R1:'1',R2:'S',R3:null},
		               {R1:'1',R2:'S',R3:null},
		               {R1:'1',R2:'S',R3:'X'}];
		 
		 
	    var finalScore = calculateRegular(frames);
	    expect( finalScore ).to.equal( 119 );
	  });

});
