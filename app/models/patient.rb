class Patient < ApplicationRecord
    #associations
    has_many :testimonials
    has_many :appointments
    has_many :doctors, through: :appointments
    

    #Validations
    has_secure_password
    validates :username, presence: true, uniqueness: true
end
