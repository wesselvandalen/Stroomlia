package main.app.presentation.dto.rating;

public class RatingRequestDTO {

    private int numberOfStars;
    private String comment;
    private Long userId;

    public RatingRequestDTO() { }
    public RatingRequestDTO(int numberOfStars, Long userId) {
        this.numberOfStars = numberOfStars;
        this.comment = "";
        this.userId = userId;
    }
    public RatingRequestDTO(int numberOfStars, String comment, Long userId) {
        this.numberOfStars = numberOfStars;
        this.comment = comment;
        this.userId = userId;
    }

    public String getComment() {
        return comment;
    }

    public int getNumberOfStars() {
        return numberOfStars;
    }

    public Long getUserId() {
        return userId;
    }
}