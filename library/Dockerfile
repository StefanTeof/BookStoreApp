# Stage 1: Build the Spring Boot application
FROM maven:3.9-eclipse-temurin AS builder
WORKDIR /workspace
COPY pom.xml .
COPY src/ ./src/
RUN mvn clean install -DskipTests

# Stage 2: Create the final image
FROM eclipse-temurin:21-jdk
WORKDIR /workspace
COPY --from=builder /workspace/target/library-0.0.1-SNAPSHOT.jar backend.jar
EXPOSE 8181
ENTRYPOINT ["java", "-jar", "backend.jar"]
