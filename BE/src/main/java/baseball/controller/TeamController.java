package baseball.controller;

import baseball.service.TeamService;
import baseball.service.dto.*;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/teams")
public class TeamController {

    private TeamService teamService;

    public TeamController(TeamService teamService) {
        this.teamService = teamService;
    }

    @PostMapping
    public void createTeams(@RequestBody List<RequestTeamDTO> teamDTOs) {
        teamService.saveTeams(teamDTOs);
    }

    @GetMapping
    public List<TeamDTO> showTeams() {
        return teamService.convertToTeamDTOList();
    }

    @PostMapping("/{teamId}/{memberId}/record")
    public void addRecord(@PathVariable Long teamId, @PathVariable Long memberId,
                          int atBat, int hit, int out) {
        teamService.insertRecord(teamId, memberId, atBat, hit, out);
    }

    @GetMapping("/{teamId}/records")
    public TeamRecordsDTO showRecords(@PathVariable Long teamId) {
        return teamService.getRecordsOfTeam(teamId);
    }
}
