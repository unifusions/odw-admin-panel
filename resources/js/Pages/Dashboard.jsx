import Breadcrumbs from '@/Components/Breadcrumbs';
import PatientRegistrationChart from '@/Components/PatientRegistrationChart';
import ServicesChart from '@/Components/ServicesChart';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
  return (
    <AuthenticatedLayout
      header='Dashboard'

    >
      <Head title="Dashboard" />
  
      <div className="row">
        <div className="col-sm-6 col-lg-4 mb-3 mb-lg-5">
          <a className="card card-hover-shadow h-100" href="#">
            <div className="card-body">
              <h6 className="card-subtitle">Total Appointments</h6>

              <div className="row align-items-center gx-2 mb-1">
                <div className="col-6">
                  <h2 className="card-title text-inherit">25</h2>
                </div>

                <div className="col-6">
                  <div className="chartjs-custom" style={{ height: '3rem' }}>
                    <canvas className="js-chart" data-hs-chartjs-options='{
                              "type": "line",
                              "data": {
                                 "labels": ["1 May","2 May","3 May","4 May","5 May","6 May","7 May","8 May","9 May","10 May","11 May","12 May","13 May","14 May","15 May","16 May","17 May","18 May","19 May","20 May","21 May","22 May","23 May","24 May","25 May","26 May","27 May","28 May","29 May","30 May","31 May"],
                                 "datasets": [{
                                  "data": [21,20,24,20,18,17,15,17,18,30,31,30,30,35,25,35,35,40,60,90,90,90,85,70,75,70,30,30,30,50,72],
                                  "backgroundColor": ["rgba(55, 125, 255, 0)", "rgba(255, 255, 255, 0)"],
                                  "borderColor": "#377dff",
                                  "borderWidth": 2,
                                  "pointRadius": 0,
                                  "pointHoverRadius": 0
                                }]
                              },
                              "options": {
                                 "scales": {
                                   "yAxes": [{
                                     "display": false
                                   }],
                                   "xAxes": [{
                                     "display": false
                                   }]
                                 },
                                "hover": {
                                  "mode": "nearest",
                                  "intersect": false
                                },
                                "tooltips": {
                                  "postfix": "k",
                                  "hasIndicator": true,
                                  "intersect": false
                                }
                              }
                            }'>
                    </canvas>
                  </div>
                </div>
              </div>

              <span className="badge bg-soft-success text-success">
                <i className="bi-graph-up"></i> 12.5%
              </span>
              <span className="text-body fs-6 ms-1">from 13</span>
            </div>
          </a>
        </div>

        <div className="col-sm-6 col-lg-4 mb-3 mb-lg-5">
          <a className="card card-hover-shadow h-100" href="#">
            <div className="card-body">
              <h6 className="card-subtitle">Total Second Opinions</h6>

              <div className="row align-items-center gx-2 mb-1">
                <div className="col-6">
                  <h2 className="card-title text-inherit">10</h2>
                </div>

                <div className="col-6">
                  <div className="chartjs-custom" style={{ height: '3rem' }}>
                    <canvas className="js-chart" data-hs-chartjs-options='{
                              "type": "line",
                              "data": {
                                 "labels": ["1 May","2 May","3 May","4 May","5 May","6 May","7 May","8 May","9 May","10 May","11 May","12 May","13 May","14 May","15 May","16 May","17 May","18 May","19 May","20 May","21 May","22 May","23 May","24 May","25 May","26 May","27 May","28 May","29 May","30 May","31 May"],
                                 "datasets": [{
                                  "data": [21,20,24,20,18,17,15,17,18,30,31,30,30,35,25,35,35,40,60,90,90,90,85,70,75,70,30,30,30,50,72],
                                  "backgroundColor": ["rgba(55, 125, 255, 0)", "rgba(255, 255, 255, 0)"],
                                  "borderColor": "#377dff",
                                  "borderWidth": 2,
                                  "pointRadius": 0,
                                  "pointHoverRadius": 0
                                }]
                              },
                              "options": {
                                 "scales": {
                                   "yAxes": [{
                                     "display": false
                                   }],
                                   "xAxes": [{
                                     "display": false
                                   }]
                                 },
                                "hover": {
                                  "mode": "nearest",
                                  "intersect": false
                                },
                                "tooltips": {
                                  "postfix": "k",
                                  "hasIndicator": true,
                                  "intersect": false
                                }
                              }
                            }'>
                    </canvas>
                  </div>
                </div>
              </div>

              <span className="badge bg-soft-success text-success">
                <i className="bi-graph-up"></i> 12.5%
              </span>
              <span className="text-body fs-6 ms-1">from 6</span>
            </div>
          </a>
        </div>

        <div className="col-sm-6 col-lg-4 mb-3 mb-lg-5">
          <a className="card card-hover-shadow h-100" href="#">
            <div className="card-body">
              <h6 className="card-subtitle">Total Estimates</h6>

              <div className="row align-items-center gx-2 mb-1">
                <div className="col-6">
                  <h2 className="card-title text-inherit">6</h2>
                </div>

                <div className="col-6">
                  <div className="chartjs-custom" style={{ height: '3rem' }}>
                    <canvas className="js-chart" data-hs-chartjs-options='{
                              "type": "line",
                              "data": {
                                 "labels": ["1 May","2 May","3 May","4 May","5 May","6 May","7 May","8 May","9 May","10 May","11 May","12 May","13 May","14 May","15 May","16 May","17 May","18 May","19 May","20 May","21 May","22 May","23 May","24 May","25 May","26 May","27 May","28 May","29 May","30 May","31 May"],
                                 "datasets": [{
                                  "data": [21,20,24,20,18,17,15,17,18,30,31,30,30,35,25,35,35,40,60,90,90,90,85,70,75,70,30,30,30,50,72],
                                  "backgroundColor": ["rgba(55, 125, 255, 0)", "rgba(255, 255, 255, 0)"],
                                  "borderColor": "#377dff",
                                  "borderWidth": 2,
                                  "pointRadius": 0,
                                  "pointHoverRadius": 0
                                }]
                              },
                              "options": {
                                 "scales": {
                                   "yAxes": [{
                                     "display": false
                                   }],
                                   "xAxes": [{
                                     "display": false
                                   }]
                                 },
                                "hover": {
                                  "mode": "nearest",
                                  "intersect": false
                                },
                                "tooltips": {
                                  "postfix": "k",
                                  "hasIndicator": true,
                                  "intersect": false
                                }
                              }
                            }'>
                    </canvas>
                  </div>
                </div>
              </div>

              <span className="badge bg-soft-success text-success">
                <i className="bi-graph-up"></i> 12.5%
              </span>
              <span className="text-body fs-6 ms-1">from 2</span>
            </div>
          </a>
        </div>

        <div class="col-lg-6 mb-3 mb-lg-5">
          <PatientRegistrationChart />

        </div>

        <div className="col-lg-6 mb-3 mb-lg-5">
          <ServicesChart />

        </div>
      </div>
    </AuthenticatedLayout>
  );
}
