class WeatherStation
{
    constructor(parraytemperature)
    {
        this.arraytemperature=parraytemperature;
    }
    calc_average=()=>
    {
        let arratt=this.arraytemperature;
    let wrong=0;
    let correct=0;
    let max=0,min=0;
    let avgmax=0,avgmin=0,percerror=0,percorrect=0;
    arratt.map(
        t=>
        {
            let tmax=t.max;
            let tmin=t.min;
            if(tmax===9||tmin===9)
            {
                wrong=wrong+1;
            }
            else
            {
                correct=correct+1;
                if(tmax>tmin)
                {
                    max=max+tmax;
                    min=min+tmin;

                }
                else
                {
                    max=max+tmin;
                    min=min+tmax;
                }

            }
        }
      )
      avgmax=max/correct;
      avgmin=min/correct;
      percerror=(wrong/(wrong+correct))*100;
      percorrect=(correct/(wrong+correct))*100;
      return{avgmax,avgmin,percerror,percorrect,correct,wrong}
    }
   
}
module.exports={WeatherStation}