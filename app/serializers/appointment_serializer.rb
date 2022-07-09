class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :date_time
  has_one :patient
  has_one :doctor
end
