const dataSource = {
  chart: {
    caption: "Competency Current & Target",
    theme: "fusion",
    numbersuffix: "",
    plotfillalpha: "40"
  },
  categories: [
    {
      category: [
        {
                    "label": "Collaboration"
                  },
                  {
                    "label": "Anticipates & Resolve Issues"
                  },
                  {
                    "label": "Agility & Adaptability"
                  },
                  {
                    "label": "Delivering Excellence"
                  },
                  {
                    "label": "Business Impact"
                  },
                  {
                    "label": "Business Acumen"
                  },
                  {
                    "label": "Digital HR"
                  },
                  {
                    "label": "Talent Management"
                  },
        {
          label: "Strategic Agility"
        },
        {
          label: "Employee Engagement"
        },
        {
          label: "HR Policy"
        },
        {
          label: "Emotional Inteligence"
        },
        {
          label: "Data Analytics"
        },
        {
          label: "Digital Transformation"
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: "Target",
      plottooltext: "<b>$label</b>Target is <b>$datavalue</b>",
      data: [
        {
          value: "5"
        },
        {
          value: "6"
        },
        {
          value: "7"
        },
        {
          value: "5"
        },
        {
          value: "6"
        },
        {
          value: "7"
        },
        {
          value: "7"
        },
        {
          value: "6"
        },
        {
          value: "7"
        },
        {
          value: "5"
        },
        {
          value: "5"
        },
        {
          value: "6"
        },
        {
          value: "7"
        },
        {
          value: "6"
        },
        {
          value: "7"
        }
      ]
    },
    {
      seriesname: "Current",
      plottooltext: "<b>$label</b> Current Value <b>$datavalue</b>",
      data: [
        {
          value: "2"
        },
        {
          value: "4"
        },
        {
          value: "3"
        },
        {
          value: "4"
        },
        {
          value: "5"
        },
        {
          value: "6"
        },
        {
          value: "7"
        },
        {
          value: "6"
        },
        {
          value: "6"
        },
        {
          value: "5"
        },
        {
          value: "4"
        },
        {
          value: "5"
        },
        {
          value: "6"
        },
        {
          value: "7"
        }
      ]
    }
  ]
};

FusionCharts.ready(function() {
  var myChart = new FusionCharts({
    type: "radar",
    renderAt: "chart-container",
    width: "100%",
    height: "100%",
    dataFormat: "json",
    dataSource
  }).render();
});