class PatientsController < ApplicationController
  wrap_parameters format: []
  skip_before_action :authorize
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  # GET /patients
  def index
    patients = Patient.all

    render json: patients
  end

  # GET /patients/1
  def show
    @current_user = Patient.find(session[:patient_id])
    render json: @current_user
  end

  # POST /patients
  def create
    patient = Patient.create(patient_params)
      if patient.valid?
          session[:patient_id] = patient.id
          render json: patient, status: :created
      else
          render json: { errors: patient.errors.full_messages }, status: :unprocessable_entity
    end
  end
  


  private
 
    def render_unprocessable_entity
      render json: {error: invalid.record.errors}, status: :unprocessable_entity
    end

    # Only allow a list of trusted parameters through.
    def patient_params
      params.permit(:username, :password, :first_name, :last_name, :insurance)
    end
end
