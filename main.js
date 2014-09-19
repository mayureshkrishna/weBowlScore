function calculateGameScore(frames) {
	var currentScore = 0;
	var multipliers = [];
	for (var i = 0; i < frames.length; i++) {
		var roll = frames[i];
		var pinScore = 0;
		var spare = false; 
		mutliplierToAdd = null;
		if (roll === 'X') {
			mutliplierToAdd = {bonusScore:10, remainingThrows:2};
			pinScore = 10;
		} 
		else
		{
			pinScore = parseInt(roll,10);
			if ((i+1 <= frames.length) && (frames[i+1] === 'S'))
				{
					mutliplierToAdd = {bonusScore:10, remainingThrows:1};
					spare = true; 
					i++;
				}
			else
				{
					currentScore += pinScore;
				}
		}
		for (var j=0; j < multipliers.length; j++)
		{
			var multiplier = multipliers[j];
			multiplier.bonusScore += pinScore;
			if (spare)
				{
					multiplier.remainingScore 
				}
			multiplier.remainingThrows -= 1;
			if (multiplier.remainingThrows === 0) {
				currentScore += multiplier.bonusScore;
				delete multipliers[j];
			} else {
				multipliers[j] = multiplier;
			}
		}
		if (null !== mutliplierToAdd) {
			multipliers.push(mutliplierToAdd);
		}
	}
}


function calculateRegular (frames)
{
	var frameScore = [];
	
	// Calculate Regular Score
	for (var i=0; i<frames.length;i++)
		{
			var frame = frames[i];
			var currentFrameScore = 0;
			if (i === 9) 
				{
					continue; 
				}
			else if (frame.R1 !== 'X' && frame.R2 !== 'S')
				{
					currentFrameScore = parseInt (frame.R1, 10);
					currentFrameScore += parseInt(frame.R2,10);
					frameScore[i] = currentFrameScore;
				}
		}
	
	// Calculate Spare Score
	for (var i=0; i<frames.length;i++)
	{
		var frame = frames[i];
		var currentFrameScore = 0;
		if (i === 9) 
			{
				continue; 
			}
		else if (frame.R2 === 'S')
			{
				var nextFrame = frames[(i + 1)];
				currentFrameScore = 10;
				if (nextFrame.R1 === 'X') {
					currentFrameScore += 10;
				} else {
					currentFrameScore += parseInt(nextFrame.R1, 10);
				}
				frameScore[i] = currentFrameScore;
			}
	}
	
	// Calculate Strike Scores
	for (var i=0; i<frames.length;i++)
	{
		var frame = frames[i];
		if (i === 9) 
			{
				continue; 
			}
		else if (frame.R1 === 'X')
			{
				var nextFrame = frames[(i + 1)];
				currentFrameScore = 10;
				if (nextFrame.R1 === 'X') {
					currentFrameScore += 10;
					if (i < 8) {
						nextFrame = frames[i+2];
						if (nextFrame.R1 === 'X') {
							currentFrameScore += 10;
						} else {
							currentFrameScore += parseInt(nextFrame.R1, 10);
						}
					} else {
						if (nextFrame.R2 === 'X') {
							currentFrameScore += 10;
						} else {
							currentFrameScore += parseInt(nextFrame.R2, 10);
						}
					}
					
				} else {
					if (nextFrame.R2 === 'S') {
						currentFrameScore += 10;
					} else {
						currentFrameScore += parseInt(nextFrame.R1,10);
						currentFrameScore += parseInt(nextFrame.R2,10);
					}
				}
				frameScore[i] = currentFrameScore;
			}
		
		
	}
	
	var lastFrame = frames[9];
	var lastFrameScore = 0;
	
	if (lastFrame.R1 === 'X')
		{
			lastFrameScore = 10;
		}
	else 
		{
			lastFrameScore += parseInt(lastFrame.R1,10);
		}
	
	if (lastFrame.R2 === 'X')
		{
			lastFrameScore += 10;
		}
	else if (lastFrame.R2 === 'S')
		{
			lastFrameScore = 10;
		}
	else 
		{
			lastFrameScore += parseInt(lastFrame.R2, 10);
		}
	
	if (null !== lastFrame.R3) 
		{
			if (lastFrame.R3 === 'X') {
				lastFrameScore += 10;
			}
			else if (lastFrame.R3 === 'S') {
				lastFrameScore += (10 - parseInt(lastFrame.R2, 10));
			}
			else {
				lastFrameScore += parseInt(lastFrame.R3, 10);
			}
		}
	
	var fullGameScore = 0;
	for (var h = 0; h < frameScore.length; h++) {
		fullGameScore += frameScore[h];
	}
	fullGameScore += lastFrameScore;
	
	return fullGameScore;
}

/*
	[  {R1:'5',R2:'4',R3:null},
       {R1:'5',R2:'4',R3:null},
       {R1:'X',R2:null,R3:null},
       {R1:'5',R2:'S',R3:null},
       {R1:'5',R2:'4',R3:null},
       {R1:'0',R2:'0',R3:null},
       {R1:'5',R2:'4',R3:null},
       {R1:'5',R2:'4',R3:null},
       {R1:'5',R2:'4',R3:null},
       {R1:'5',R2:'S',R3:'4'}]
*/