class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        patient = Patient.find_by(username: params[:username])
        if patient&.authenticate(params[:password])
          session[:patient_id] = patient.id
          render json: patient, status: :created
        else
          render json: { errors: ["Invalid username or password"] }, status: :unauthorized
        end
      end


    def destroy
        current_user = Patient.find(session[:patient_id])
        if current_user
            session.delete :patient_id
            head :no_content
        else
            render json: { errors: "Not authorized"  }, status: :unauthorized
        end
    end
    
end