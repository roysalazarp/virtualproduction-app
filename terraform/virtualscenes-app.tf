resource "aws_s3_bucket" "virtualscenes-app" {
  bucket = "virtualproduction-microservice-webapp-virtualscenes-app"
  acl = "public-read"
  policy = <<POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicRead",
      "Effect": "Allow",
      "Principal": "*",
      "Action": ["s3:GetObject"],
      "Resource": ["arn:aws:s3:::virtualproduction-microservice-webapp-virtualscenes-app/*"]
    }
  ]
}
POLICY

  website {
    index_document = "index.html"
  }
}
