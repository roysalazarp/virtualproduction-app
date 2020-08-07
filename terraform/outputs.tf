output "api-gateway-codedeploy-app-name" {
  value = module.api-gateway-codedeploy.app-name
}

output "api-gateway-deployment-bucket-name" {
  value = module.api-gateway-codedeploy.deployment-bucket-name
}

output "api-gateway-private-ip" {
  value = module.api-gateway.private-ip
}

output "api-gateway-public-ip" {
  value = aws_eip.api-gateway-eip.public_ip
}

output "aws-region" {
  value = var.aws-region
}

output "scenes-service-codedeploy-app-name" {
  value = module.scenes-service-codedeploy.app-name
}

output "scenes-service-deployment-bucket-name" {
  value = module.scenes-service-codedeploy.deployment-bucket-name
}

output "scenes-service-private-ip" {
  value = module.scenes-service.private-ip
}

output "users-service-codedeploy-app-name" {
  value = module.users-service-codedeploy.app-name
}

output "users-service-deployment-bucket-name" {
  value = module.users-service-codedeploy.deployment-bucket-name
}

output "users-service-private-ip" {
  value = module.users-service.private-ip
}