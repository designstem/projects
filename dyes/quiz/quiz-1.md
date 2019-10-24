| background: var(--lightestgray)
| 1
| 2
| 3
| rows: auto

<caption>📋 Quiz</caption>

## The life-cycle of a T-shirt 

-

<simple-quiz name="tshirt-quiz" 
    question="How many T-shirts were sold and bought annually, globally in 2014?" 
    :options="[
      {text:'1 billion', status: false, message:'NOT QUITE!', hint:'Clue: In 2014, the global population was 7.2 billion. On average, approximately one T-shirt was bought for every four people on the planet.'},
      {text:'0.5 billion', status: false, message:'WRONG ANSWER!', hint:'Clue: In 2014, the global population was 7.2 billion. On average, approximately one T-shirt was bought for every four people on the planet.'},
      {text:'2 billion', status: true, message:'WELL DONE!', hint:'Clue: In 2014, the global population was 7.2 billion. On average, approximately one T-shirt was bought for every four people on the planet.'},
      {text:'3 billion', status: false, message:'SORRY, NO!', hint:'Clue: In 2014, the global population was 7.2 billion. On average, approximately one T-shirt was bought for every four people on the planet.'},
    ]"
/>

-

<!-- # {{ get('tshirt-quiz') }}  -->

---

| background: var(--lightestgray)
| 1
| 2
| 3
| rows: auto

-

<simple-quiz name="tshirt-quiz" 
    question="Which of these four countries is NOT a major producer of cotton?" 
    :options="[
      {text:'Bangladesh', status: true, message:'GOOD WORK!', hint:'You just unlocked the next question'},
      {text:'India', status: false, message:'WRONG ANSWER!', hint:'Clue: one of these countries is a major exporter of cotton garments, but not a major grower of cotton.'},
      {text:'USA', status: false, message:'TRY AGAIN!', hint:'Clue: one of these countries is a major exporter of cotton garments, but not a major grower of cotton.'},
      {text:'China', status: false, message:'SORRY, NO!', hint:'Clue: one of these countries is a major exporter of cotton garments, but not a major grower of cotton.'},
    ]"
  />

-

---

| background: var(--lightestgray)
| 1
| 2
| 3
| rows: auto

-

<simple-quiz name="tshirt-quiz" 
    question="How much water is needed to make the average T-shirt?" 
    :options="[
      {text:'0.27 l', status: false, message:'NOT REALLY....!', hint:'Clue: the correct volume of water required would fill over 30 bath tubs.'},
      {text:'2.7 l', status: false, message:'WRONG ANSWER!', hint:'Clue: the correct volume of water required would fill over 30 bath tubs.'},
      {text:'27 l', status: false, message:'TRY AGAIN!', hint:'Clue: the correct volume of water required would fill over 30 bath tubs.'},
      {text:'2700 l', status: true, message:'WELL DONE!', hint:'Clue: the correct volume of water required would fill over 30 bath tubs.'},
    ]"
/>

-

---

| background: var(--lightestgray)
| 1
| 2
| 3
| rows: auto

-

<simple-quiz name="tshirt-quiz" 
    question="Insecticides and other pesticides are used to increase cotton yield. Which one of the following is NOT a problem associated with the use of these chemicals." 
    :options="[
      {text:'They damage the health of workers', status: false, message:'NOT REALLY', hint:'Clue: Insectides and other pesticides are toxic and many are nerve toxins. Their effects are indiscriminate – they don’t just harm pests.'},
      {text:'They damage ecosystems', status: false, message:'WRONG ANSWER!', hint:'Clue: Insectides and other pesticides are toxic and many are nerve toxins. Their effects are indiscriminate – they don’t just harm pests'},
      {text:'They have a horrible odour', status: true, message:'WELL DONE!', hint:'Clue: Insectides and other pesticides are toxic and many are nerve toxins. Their effects are indiscriminate – they don’t just harm pests.'},
      {text:'They may cause cancer', status: false, message:'SORRY, NO!', hint:'Clue: Insectides and other pesticides are toxic and many are nerve toxins. Their effects are indiscriminate – they don’t just harm pests.'},
    ]"
/>

-

---

| background: var(--lightestgray)
| 1
| 2
| 3
| rows: auto

-

<simple-quiz name="tshirt-quiz" 
    question="Organic cotton is grown without the use of insecticides and other pesticides. What percentage of cotton grown globally is organic cotton?" 
    :options="[
      {text:'1%', status: true, message:'GOOD WORK!', hint:'Clue: a tiny proportion of cotton is “organic.”'},
      {text:'10%', status: false, message:'WRONG ANSWER!', hint:'Clue: a tiny proportion of cotton is “organic.”'},
      {text:'20%', status: false, message:'TRY AGAIN', hint:'Clue: a tiny proportion of cotton is “organic.”'},
      {text:'30%', status: false, message:'SORRY, NO!', hint:'Clue: a tiny proportion of cotton is “organic.”'},
    ]"
/>

-

---

| background: var(--lightestgray)
| 1
| 2
| 3
| rows: auto

-

<simple-quiz name="tshirt-quiz" 
    question="What group of chemicals accounts for 70% of the dyes used to colour cotton?" 
    :options="[
      {text:'Bleach', status: false, message:'NOT REALLY!', hint:'Clue: the correct compounds are made synthetically and contain C, H, O and N'},
      {text:'Natural dyes', status: false, message:'WRONG ANSWER!', hint:'Clue: the correct compounds are made synthetically and contain C, H, O and N'},
      {text:'Mordants (e.g. lead, cadmium & mercury compounds)', status: false, message:'SORRY, NO...', hint:'Clue: the correct compounds are made synthetically and contain C, H, O and N'},
      {text:'Azo compounds', status: true, message:'INDEED!', hint:'Clue: the correct compounds are made synthetically and contain C, H, O and N'},
    ]"
/>

-

---

| background: var(--lightestgray)
| 1
| 2
| 3
| rows: auto

-

<simple-quiz name="tshirt-quiz" 
    question="Which country is the world’s biggest exporter of cotton T-shirts?" 
    :options="[
      {text:'India', status: false, message:'NOT REALLY', hint:'Clue: The correct country is not a major cotton-grower. It imports much of the cotton from other countries to produce cotton garments.'},
      {text:'Bangladesh', status: true, message:'WELL DONE!', hint:'Clue: The correct country is not a major cotton-grower. It imports much of the cotton from other countries to produce cotton garments.'},
      {text:'China', status: false, message:'WRONG ANSWER!', hint:'Clue: The correct country is not a major cotton-grower. It imports much of the cotton from other countries to produce cotton garments.'},
      {text:'USA', status: false, message:'SORRY, NO!', hint:'Clue: The correct country is not a major cotton-grower. It imports much of the cotton from other countries to produce cotton garments.'},
    ]"
/>

-

---

| background: var(--lightestgray)
| 1
| 2
| 3
| rows: auto

-

<simple-quiz name="tshirt-quiz" 
    question="The population of Bangladesh was 159 million in 2014. How many people in Bangladesh were involved in producing cotton T-shirts?" 
    :options="[
      {text:'0.5 million', status: false, message:':(', hint:'Clue: Production of cotton T-shirts is a major employer. About 1-in-35 people were involved in this industry in 2014 (and a much higher proportion of the working population!)'},
      {text:'2 million', status: false, message:'WRONG ANSWER!', hint:'Clue: Production of cotton T-shirts is a major employer. About 1-in-35 people were involved in this industry in 2014 (and a much higher proportion of the working population!)'},
      {text:'4.5 million', status: true, message:'GOOD WORK!', hint:'Clue: Production of cotton T-shirts is a major employer. About 1-in-35 people were involved in this industry in 2014 (and a much higher proportion of the working population!)'},
      {text:'50.5 million', status: false, message:'SORRY, NO!', hint:'Clue: Production of cotton T-shirts is a major employer. About 1-in-35 people were involved in this industry in 2014 (and a much higher proportion of the working population!)'},
    ]"
/>

-

---

| background: var(--lightestgray)
| 1
| 2
| 3
| rows: auto

-

<simple-quiz name="tshirt-quiz" 
    question="Poor working conditions and low wages are features of the workers who make T-shirts. What was the average salary of these workers per month in 2014?" 
    :options="[
      {text:'$68', status: true, message:'YES!', hint:'Clue: In Bangladesh in 2014, wages below $78 per month were considered as being below the poverty line.'},
      {text:'$168', status: false, message:'WRONG ANSWER!', hint:'Clue: In Bangladesh in 2014, wages below $78 per month were considered as being below the poverty line.'},
      {text:'$268', status: false, message:'NO', hint:'Clue: In Bangladesh in 2014, wages below $78 per month were considered as being below the poverty line.'},
      {text:'$368', status: false, message:'TRY AGAIN!', hint:'Clue: In Bangladesh in 2014, wages below $78 per month were considered as being below the poverty line.'},
    ]"
/>

-

---

| background: var(--lightestgray)
| 1
| 2
| 3
| rows: auto

-

<simple-quiz name="tshirt-quiz" 
    question="Clothing production has a high carbon footprint. What percentage of global carbon emissions have been linked to clothing production?" 
    :options="[
      {text:'1%', status: false, message:'NO!', hint:'Clothing production is responsible for about one tenth of global carbon emissions, mainly through transport of cotton and cotton garments across the world.'},
      {text:'5%', status: false, message:'WRONG ANSWER!', hint:'Clothing production is responsible for about one tenth of global carbon emissions, mainly through transport of cotton and cotton garments across the world.'},
      {text:'10%', status: true, message:'WELL DONE!', hint:'Clothing production is responsible for about one tenth of global carbon emissions, mainly through transport of cotton and cotton garments across the world.'},
      {text:'20%', status: false, message:'SORRY, NO!', hint:'Clothing production is responsible for about one tenth of global carbon emissions, mainly through transport of cotton and cotton garments across the world.'},
    ]"
/>

-

---

| background: var(--lightestgray)
| 1
| 2
| 3
| rows: auto

-

<simple-quiz name="tshirt-quiz" 
    question="T-shirts are not the only garments made from cotton. In 2014, how many cotton garments were made globally?" 
    :options="[
      {text:'8 million', status: false, message:'SORRY, NO!', hint:'Clue: In 2014, the global population was 7.2 billion. On average, approximately 11 cotton garments were made per person.'},
      {text:'80 million', status: false, message:'WRONG ANSWER!', hint:'Clue: In 2014, the global population was 7.2 billion. On average, approximately 11 cotton garments were made per person.'},
      {text:'8 billion', status: false, message:'TRY AGAIN!', hint:'Clue: In 2014, the global population was 7.2 billion. On average, approximately 11 cotton garments were made per person.'},
      {text:'80 billion', status: true, message:'GOOD WORK!', hint:'Clue: In 2014, the global population was 7.2 billion. On average, approximately 11 cotton garments were made per person.'},
    ]"
/>

-

---

| background: var(--lightestgray)
| 1
| 2
| 3
| rows: auto

-

<simple-quiz name="tshirt-quiz" 
    question="Why is cotton production a serious environmental issue?" 
    :options="[
      {text:'Cotton growing uses a lot of water', status: true, message:'NOT REALLY', hint:'Clue: You are not wrong, but this is just one of the environment issues associated with cotton production.'},
      {text:'Use of mordants & dyes pollutes water', status: false, message:'WRONG ANSWER!', hint:'Clue: You are not wrong, but this is just one of the environment issues associated with cotton production.'},
      {text:'Fashion industry has a high carbon footprint', status: false, message:'TRY AGAIN!', hint:'Clue: You are not wrong, but this is just one of the environment issues associated with cotton production.'},
      {text:'All of the above (and more!)', status: true, message:'WELL DONE!', hint:'Clue: You are not wrong, but this is just one of the environment issues associated with cotton production.'},
    ]"
/>

-

---


<center>

  # You did it!

</center>

