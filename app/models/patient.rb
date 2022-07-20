class Patient < ApplicationRecord
    #associations
    has_many :testimonials
    has_many :appointments
    has_many :doctors, -> { distinct }, through: :appointments

    #Validations
    has_secure_password
    validates :username, presence: true, uniqueness: true
    validates :insurance, presence: true
    validates :first_name, presence: true
    validates :last_name, presence: true
end
