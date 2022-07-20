class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :date_time, :patient, :doctor
  has_one :patient
  has_one :doctor
end
