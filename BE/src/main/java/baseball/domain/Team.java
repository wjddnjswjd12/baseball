package baseball.domain;

import org.springframework.data.annotation.Id;

import java.util.Set;

public class Team {

    @Id
    private Long id;

    private String name;
    private Set<Member> members;
    private Set<Score> scores;

    public Team(String name, Set<Member> members) {
        this.name = name;
        this.members = members;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Set<Member> getMembers() {
        return members;
    }

    public Set<Score> getScores() {
        return scores;
    }

    public void setScore(Score score) {
        scores.add(score);
    }
}