import Breadcrumbs from '@/Components/Breadcrumbs';
import PatientRegistrationChart from '@/Components/PatientRegistrationChart';
import ServicesChart from '@/Components/ServicesChart';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Dashboard() {

  const { appointmentcount, socount, previousSoCount, previousAppointmentCount, patient_labels, patient_datas } = usePage().props;

  const RenderUpGraph = ({ percentile }) => {

    return (
      <> <span className="badge bg-soft-success text-success">
        <i className="bi-graph-up" /> {percentile.toFixed(2)} %
      </span>
      </>
    )
  }

  const RenderDownGraph = ({ percentile }) => {
    return (
      <span className="badge bg-soft-danger text-danger">
        <i className="bi-graph-down" /> {percentile.toFixed(2) } %
      </span>
    )
  }
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
                  <h2 className="card-title text-inherit">{appointmentcount ?? ''}</h2>
                </div>


              </div>

              {appointmentcount > previousAppointmentCount ? <RenderUpGraph percentile={(appointmentcount / previousAppointmentCount) * 100} /> : <RenderDownGraph percentile={(appointmentcount / previousAppointmentCount) * 100} />}

              <span className="text-body fs-6 ms-1">from {previousAppointmentCount}</span>
            </div>
          </a>
        </div>

        <div className="col-sm-6 col-lg-4 mb-3 mb-lg-5">
          <a className="card card-hover-shadow h-100" href="#">
            <div className="card-body">
              <h6 className="card-subtitle">Total Second Opinions</h6>

              <div className="row align-items-center gx-2 mb-1">
                <div className="col-6">
                  <h2 className="card-title text-inherit">{socount}</h2>
                </div>


              </div>

              {socount > previousSoCount ? <RenderUpGraph percentile={(socount / previousSoCount) * 100} /> : <RenderDownGraph percentile={(socount / previousSoCount) * 100} />}
              <span className="text-body fs-6 ms-1">from {previousSoCount}</span>
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

              </div>

              <span className="badge bg-soft-success text-success">
                <i className="bi-graph-up"></i> 12.5%
              </span>
              <span className="text-body fs-6 ms-1">from 2</span>
            </div>
          </a>
        </div>

        <div class="col-lg-12 mb-3 mb-lg-5">
          <PatientRegistrationChart  labels = {patient_labels} values = {patient_datas}/>

        </div>

        {/* <div className="col-lg-6 mb-3 mb-lg-5">
          <ServicesChart />

        </div> */}

      </div>
    </AuthenticatedLayout>
  );
}
