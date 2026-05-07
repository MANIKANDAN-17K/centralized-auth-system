FROM eclipse-temurin:17-jdk-jammy

WORKDIR /app

COPY backend/AuthService/pom.xml .
COPY backend/AuthService/src ./src

RUN apt-get update && apt-get install -y maven && \
    mvn clean package -DskipTests

EXPOSE 8080

CMD ["java", "-jar", "target/AuthService-0.0.1-SNAPSHOT.jar"]