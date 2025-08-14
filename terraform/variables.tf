variable "project_name" {
  type    = string
  default = "Free-Tier-VPC-Practice"
}

variable "aws_region" {
  type    = string
  default = "ap-southeast-2"
}

variable "aws_az" {
  type    = string
  default = "ap-southeast-2a"
}

variable "vpc_cidr" {
  type    = string
  default = "10.0.0.0/16"
}

variable "public_subnet_cidr" {
  type    = string
  default = "10.0.1.0/24"
}
