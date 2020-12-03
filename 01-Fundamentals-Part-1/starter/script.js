// const marksWeight = 95;
// const marksHeight = 1.88;

// const johnsWeight = 85;
// const johnsHeight = 1.76;

const marks = {
    height : 85,
    weight : 1.88,
    calcBMI: function() {
        this.bmi = this.weight / (this.height ** 2);
        return this.bmi;
    }    
}

const johns = {
    height : 85,
    weight : 1.88,
    calcBMI: function() {
        this.bmi = this.weight / (this.height ** 2);
        return this.bmi
    }    
}

marks.calcBMI();
johns.calcBMI();

if(marks.bmi > johns.bmi){
    console.log(`Mark's BMI ${this.marks.bmi} is higher than John's BMI ${johns.bmi}`);
} else {
    console.log(`Mark's BMI ${marks.bmi} is lesser than John's BMI ${johns.bmi}`)
}
