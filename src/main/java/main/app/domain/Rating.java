package main.app.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Rating {

    @Id
    @GeneratedValue
    private Long id;
    private int numberOfStars;
    private String comment;
    private Long userId;

    protected Rating() { }
    public Rating(int numberOfStars, Long userId) {
        this.numberOfStars = numberOfStars;
        this.comment = "";
        this.userId = userId;
    }
    public Rating(int numberOfStars, String comment, Long userId) {
        this.numberOfStars = numberOfStars;
        this.comment = comment;
        this.userId = userId;
    }

    public Long getId() {
        return id;
    }

    public Long getUserId() {
        return userId;
    }

    public int getNumberOfStars() {
        return numberOfStars;
    }

    public String getComment() {
        return comment;
    }

    @Override
    public String toString() {
        return "Rating{" +
                "id=" + id +
                ", numberOfStars=" + numberOfStars +
                ", comment='" + comment + '\'' +
                ", userId=" + userId +
                '}';
    }
}