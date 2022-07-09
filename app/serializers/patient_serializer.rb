class PatientSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :first_name, :last_name, :insurance, :doctors
  has_many :appointments
end
