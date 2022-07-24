class Appointment < ApplicationRecord
  belongs_to :patient
  belongs_to :doctor
  has_one :location, through: :doctor


  validates :patient_id, presence: true
  validates :doctor_id, presence: true
  validates :date_time, presence: true
  validates :date_time, uniqueness: { scope: :doctor_id }
end
