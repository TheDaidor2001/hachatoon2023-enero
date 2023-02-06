import cohere from "cohere-ai";

cohere.init("zNIA89EYj0L3p3hPN2uqPbS2bvm3CaTw68MIeghu");

export async function getWorkout(gender, year, objetive, planning) {
  try {
    const response = await cohere.generate({
      model: "command-xlarge-20221108",
      prompt: `This is a workout to train
            
            --
        
        Routine for 25 year old men with the goal of losing weight training at home
            
        rutine:
        1- Bodyweight Training:
            Push-ups: 4 sets of 8-12 reps
            Squats: 4 sets of 8-12 reps
            Lunges: 4 sets of 8-12 reps on each leg
            Plank: 4 sets, holding for 30-60 seconds
            Tricep dips on a chair: 4 sets of 8-12 reps
            Bicycle crunches: 4 sets of 8-12 reps
        
        2- Cardio:
            High-intensity interval training (HIIT) with bodyweight exercises, such as jumping jacks, burpees, and mountain climbers, for 20-30 minutes, 3-4 times a week.
            30 minutes of steady-state cardio, such as jogging or jumping rope, 2-3 times a week.
        
        3-Stretching: 
            Dedicate 5-10 minutes at the end of each session to stretch your muscles and prevent injury.
            --
        Routine for 40 year old women aiming to lose weight by training in the gym
            
        rutine:
        1- Strength Training:
            Squats with weights: 4 sets of 8-12 reps
            Deadlifts: 4 sets of 8-12 reps
            Lunges: 4 sets of 8-12 reps on each leg
            Push-ups: 4 sets of 8-12 reps
            Dumbbell rows: 4 sets of 8-12 reps
            Bicep curls: 4 sets of 8-12 reps
            
        2-Cardio:
            30 minutes of steady-state cardio, such as cycling or jogging, 3-4 times a week.
            Interval training such as HIIT on the treadmill or stationary bike for 20-30 minutes, 2-3 times a week.
        
        3- Stretching: 
            Dedicate 5-10 minutes at the end of each session to stretch your muscles and prevent injury.
            --
            routine for a 19 year old women with the goal of gaining muscle by training in the gym
            
            rutine:
            
        1- Strength Training:
            Squats with barbell: 4 sets of 8-10 reps
            Leg press: 4 sets of 8-10 reps
            Leg extensions with weights: 4 sets of 8-10 reps
            Dumbbell bicep curls: 4 sets of 8-10 reps
            Dumbbell tricep extensions: 4 sets of 8-10 reps
            Barbell rows: 4 sets of 8-10 reps
        
        2-Muscle Hypertrophy:
            Dumbbell shoulder presses: 4 sets of 8-10 reps
            Tricep dips on parallel bars: 4 sets of 8-10 reps
            Dumbbell bicep curls: 4 sets of 8-10 reps
            Dumbbell tricep extensions: 4 sets of 8-10 reps
            Dumbbell rows on a machine: 4 sets of 8-10 reps
        
        3- Cardio: 
            30 minutes of high-intensity interval training (HIIT) on the treadmill or elliptical.
        
        4- Stretching: 
            Dedicate 5-10 minutes at the end of each session to stretch your muscles and prevent injury.
        --

        Routine for ${year} years old ${gender} aiming to ${objetive} by training in the ${planning}
        
        rutine: 
        --`,
      max_tokens: 500,
      temperature: 0.5,
      k: 0,
      p: 0.75,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop_sequences: ["--"],
      return_likelihoods: "NONE",
    });
    return response.body.generations[0].text;
  } catch (error) {
    console.log(error);
  }
}
