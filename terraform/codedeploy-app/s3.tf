resource "aws_s3_bucket" "deploy-bucket" {
  bucket = "virtualproduction-microservice-webapp-${var.app-name}-deployment"
}
