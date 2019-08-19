| background: var(--lightestgray)
| 1
| 2
| rows: auto

# Retina Quiz

-

<simple-quiz name="retina-quiz" 
    question="Rods and cones are receptors in the retina of the eye.<br />What type of receptor are they?" 
    :options="[
      {text:'Osmoreceptors', status: false, message:'NOT QUITE!', hint:'Clue: they detect light.'},
      {text:'Baroreceptors', status: false, message:'WRONG ANSWER!', hint:'Clue: they detect light.'},
      {text:'Photoreceptors', status: true, message:'WELL DONE!', hint:'Click for next question'},
      {text:'Chemoreceptors', status: false, message:'SORRY, NO!', hint:'Clue: they detect light!'},
    ]"
/>

# {{ get('retina-quiz') }}

---

| background: var(--lightestgray)

<simple-quiz name="retina-quiz" 
    question="Rods & cones contain light-sensitive pigments which undergo a chemical change when they absorb light.<br /> What is this chemical change called?" 
    :options="[
      {text:'Bleaching', status: true, message:'GOOD WORK!', hint:'You just unlocked the next question'},
      {text:'Neutralisation', status: false, message:'WRONG ANSWER!', hint:'Clue: the pigments become colourless when they undergo this chemical change.'},
      {text:'Hydrolysis', status: false, message:'TRY AGAIN!', hint:'Clue: the pigments become colourless when they undergo this chemical change.'},
      {text:'Condensation', status: false, message:'SORRY, NO!', hint:'Clue: the pigments become colourless when they undergo this chemical change.'},
    ]"
  />

---

| background: var(--lightestgray)

<simple-quiz name="retina-quiz" 
    question="When light bleaches the photosensitive pigments in rods and cones, the energy released causes the membranes of rods & cones to become..." 
    :options="[
      {text:'Less permeable to Na+ ions', status: false, message:'NOT REALLY....!', hint:'Clue: the entry of these ions causes depolarisation (the inside of the membranes become more positive)'},
      {text:'Less permeable to K+ ions', status: false, message:'WRONG ANSWER!', hint:'Clue: the entry of these ions causes depolarisation (the inside of the membranes become more positive)'},
      {text:'More permeable to K+ ions', status: false, message:'TRY AGAIN!', hint:'Clue: the entry of these ions causes depolarisation (the inside of the membranes become more positive)'},
      {text:'More permeable to Na+ ions', status: true, message:'WELL DONE!', hint:'Clue: the entry of these ions causes depolarisation (the inside of the membranes become more positive)'},
    ]"
/>

---

| background: var(--lightestgray)

<simple-quiz name="retina-quiz" 
    question="Which is the correct sequence of ‘potentials’ following depolarisation of rod and cone membranes?" 
    :options="[
      {text:'Generator, Action, Threshold', status: false, message:'NOT REALLY', hint:'Clue: depolarisation makes the inside membranes of rods and cones slightly less negative. If depolarisation reaches a certain value (approximately -50mV) a nerve impulse is set up.'},
      {text:'Action, Generator, Threshold', status: false, message:'WRONG ANSWER!', hint:'Clue: depolarisation makes the inside membranes of rods and cones slightly less negative. If depolarisation reaches a certain value (approximately -50mV) a nerve impulse is set up.'},
      {text:'Generator, Threshold, Action', status: true, message:'WELL DONE!', hint:'Clue: depolarisation makes the inside membranes of rods and cones slightly less negative. If depolarisation reaches a certain value (approximately -50mV) a nerve impulse is set up.'},
      {text:'Threshold, Generator, Action', status: false, message:'SORRY, NO!', hint:'Clue: depolarisation makes the inside membranes of rods and cones slightly less negative. If depolarisation reaches a certain value (approximately -50mV) a nerve impulse is set up.'},
    ]"
/>

---

| background: var(--lightestgray)

<simple-quiz name="retina-quiz" 
    question="The blind spot contains..." 
    :options="[
      {text:'Neither rods nor cones', status: true, message:'GOOD WORK!', hint:'Clue: the fovea is used for colour vision.'},
      {text:'Cones but no rods', status: false, message:'WRONG ANSWER!', hint:'Clue: the fovea is used for colour vision.'},
      {text:'Rods and cones', status: false, message:'TRY AGAIN', hint:'Clue: the fovea is used for colour vision.'},
      {text:'Rods but no cones', status: false, message:'SORRY, NO!', hint:'Clue: the fovea is used for colour vision.'},
    ]"
/>

---

| background: var(--lightestgray)

<simple-quiz name="retina-quiz" 
    question="Which statement about RODS is NOT correct?<br />They are..." 
    :options="[
      {text:'Located in the peripheral retina', status: false, message:'NOT REALLY!', hint:'Clue: light is focused on the fovea to produce a detailed, coloured image.'},
      {text:'Sensitive to dim light (high light sensitivity)', status: false, message:'WRONG ANSWER!', hint:'Clue: light is focused on the fovea to produce a detailed, coloured image.'},
      {text:'Not sensitive to colour', status: false, message:'SORRY, NO...', hint:'Clue: light is focused on the fovea to produce a detailed, coloured image.'},
      {text:'Concentrated in the fovea', status: true, message:'INDEED!', hint:'Clue: light is focused on the fovea to produce a detailed, coloured image.'},
    ]"
/>

---

| background: var(--lightestgray)

<simple-quiz name="retina-quiz" 
    question="Which statement about CONES is NOT correct?<br />They are..." 
    :options="[
      {text:'Sensitive to colour', status: false, message:'NOT REALLY', hint:'Clue: You can’t see colours properly when its dark.'},
      {text:'Sensitive to dim light (high light sensitivity)', status: true, message:'WELL DONE!', hint:'Clue: You can’t see colours properly when its dark.'},
      {text:'Concentrated in the fovea', status: false, message:'WRONG ANSWER!', hint:'Clue: You can’t see colours properly when its dark.'},
      {text:'There are three different types', status: false, message:'SORRY, NO!', hint:'Clue: You can’t see colours properly when its dark.'},
    ]"
/>

---

| background: var(--lightestgray)

<simple-quiz name="retina-quiz" 
    question="Which statement is correct?<br />According to the trichromatic theory, the retina has three types of..." 
    :options="[
      {text:'Rods, containing red, green & blue pigments', status: false, message:':(', hint:'Clue: there are three types of photosensitive pigment iodopsin, showing maximum absorption of red, green or blue wavelengths of light.'},
      {text:'Rods, sensitive to red, green & blue light', status: false, message:'WRONG ANSWER!', hint:'Clue: there are three types of photosensitive pigment iodopsin, showing maximum absorption of red, green or blue wavelengths of light.'},
      {text:'Cones, sensitive to red, green & blue light', status: true, message:'GOOD WORK!', hint:'Clue: there are three types of photosensitive pigment iodopsin, showing maximum absorption of red, green or blue wavelengths of light.'},
      {text:'Cones, containing red, green & blue pigments', status: false, message:'SORRY, NO!', hint:'Clue: there are three types of photosensitive pigment iodopsin, showing maximum absorption of red, green or blue wavelengths of light.'},
    ]"
/>

---

| background: var(--lightestgray)

<simple-quiz name="retina-quiz" 
    question="Which of the following is correct for rods?<br />Rods have..." 
    :options="[
      {text:'Low light sensitivity, high visual acuity', status: false, message:'TRY AGAIN!', hint:'Clue: Rods are used for night vision (dim light)'},
      {text:'Low light sensitivity, low visual acuity', status: false, message:'WRONG ANSWER!', hint:'Clue: Rods are used for night vision (dim light)'},
      {text:'High light sensitivity, high visual acuity', status: false, message:'NO', hint:'Clue: Rods are used for night vision (dim light)'},
      {text:'High light sensitivity, low visual acuity', status: true, message:'YES!', hint:'Clue: Rods are used for night vision (dim light)'},
    ]"
/>

---

| background: var(--lightestgray)

<simple-quiz name="retina-quiz" 
    question="Which of the following is correct for cones?<br />Cones have..." 
    :options="[
      {text:'High light sensitivity, high visual acuity', status: false, message:'NO!', hint:'Clue: Note that the question is “does NOT effect”. Remember that diffusion is a passive process.'},
      {text:'High light sensitivity, low visual acuity', status: false, message:'WRONG ANSWER!', hint:'Clue: Note that the question is “does NOT effect”. Remember that diffusion is a passive process.'},
      {text:'Low light sensitivity, high visual acuity', status: true, message:'WELL DONE!', hint:'Clue: Note that the question is “does NOT effect”. Remember that diffusion is a passive process.'},
      {text:'Low light sensitivity, low visual acuity', status: false, message:'SORRY, NO!', hint:'Clue: Note that the question is “does NOT effect”. Remember that diffusion is a passive process.'},
    ]"
/>

---

| background: var(--lightestgray)

<simple-quiz name="retina-quiz" 
    question="Which of the following does NOT explain why rods are sensitive to dim light?" 
    :options="[
      {text:'Rods are located in the peripheral parts of the retina', status: true, message:'GOOD WORK!', hint:'Clue: Rods are arranged in groups and contain a light-sensitive pigment.'},
      {text:'Rods contain the photosensitive pigment rhodopsin', status: false, message:'WRONG ANSWER!', hint:'Clue: Rods are arranged in groups and contain a light-sensitive pigment.'},
      {text:'Several rods synapse with one bipolar neurone', status: false, message:'TRY AGAIN!', hint:'Clue: Rods are arranged in groups and contain a light-sensitive pigment.'},
      {text:'Several rods can combine to trigger an action potential', status: false, message:'SORRY, NO!', hint:'Clue: Rods are arranged in groups and contain a light-sensitive pigment.'},
    ]"
/>

---

| background: var(--lightestgray)

<simple-quiz name="retina-quiz" 
    question="All of the following statements about cones are correct, but which one best explains why cones have high visual acuity?" 
    :options="[
      {text:'Cones are concentrated in the fovea of the retina', status: true, message:'NOT REALLY', hint:'Think about how the brain can pinpoint where light has fallen on the retina.'},
      {text:'There are 3 types of cone, which are sensitive to red, green or blue light', status: false, message:'WRONG ANSWER!', hint:'Think about how the brain can pinpoint where light has fallen on the retina.'},
      {text:'Cones contain the photosensitive pigment iodopsin', status: false, message:'TRY AGAIN!', hint:'Think about how the brain can pinpoint where light has fallen on the retina.'},
      {text:'One cone synapses with one bipolar neurone', status: true, message:'WELL DONE!', hint:'Think about how the brain can pinpoint where light has fallen on the retina.'},
    ]"
/>

---


<center>
  # You did it!
</center>

