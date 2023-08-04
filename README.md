# Protecting Elections Toolkit

## Development

This page was originally planned to fit in the body of a "Basic page" on the IDEA website, which can contain HTML code. For this reason, it was kept as simple as possible. I.e., a single static HTML page, as little javascript as possible, and styled to match the rest of IDEA's website. (The page directly imports a CSS file from IDEA.) For convenience, since switching to Github I have separated out the script and style sections to their own files, as well as added an assets folder for the logo images. This can be condensed back into a single page if needed.

The number of columns made the table too wide to embed, so it was suggested that the toolkit be put on a separate page. It should be straightforward for a website administrator to upload these files directly. However, idea.int is undergoing a remodel while this toolkit is being created, so the files were stored here for now.

The filtering code is not especially sophisticated, but it gets the job done. When the filter button is clicked, or <Enter> is pressed, a loop runs though all rows, and hides items (by turning the css `display` style to `none`) that do not match any of the searched-for values.

### Github

Github is convenient for two reasons:

1. Github Pages is a quick and free way to put the toolkit online for now
2. It makes all files easy to find, so it will be very straightforward to move the toolkit to IDEA's website later

## Management

## Editing introductory text

Introductory text appears towards the top of the index.html file. Text can be edited directly.

New paragraphs can be added by adding text between an opening and closing paragraph tag: `<p>` and `</p>`.

Links take the format:

    <a href="https://www.idea.int/our-work/what-we-do/elections" target="_blank">Protecting Elections</a>
    <a href="https://www.idea.int/our-work/what-we-do/elections">Protecting Elections</a>

`https://www.idea.int/our-work/what-we-do/elections` is the url and `Protecting Elections` is the clickable text. If `target="_blank"` is included, the link will open in a new tab.

### Table Items

Here is an example of a table item:

    <tr>
        <td class="title" style="width:50%;"><a
            href="https://www.kofiannanfoundation.org/electoral-integrity/justice-electoral-integrity-initiative/"
            target="_blank">
             Access to Justice and Electoral Integrity <i
            class="fa fa-external-link"></i></a></td>
        <td class="author">Kofi Annan Foundation</td>
        <td class="challenge">Autocratization</td>
        <td class="capacity">Knowledge</td>
        <td class="prevention">✅</td>
        <td class="resilience">❌</td>
        <td class="recovery">❌</td>
        <td class="gender">❌</td>
        <td class="legal">✅</td>
        <td class="institutional">❌</td>
        <td class="management">❌</td>
    </tr>

The categories of prevention, resilience, recovery, gender, legal, institutional, and management are all "yes/no" columns, and use icons to indicate their value. The UTF-8 values are `&#9989;` for ✅ and `&#10060;` for ❌.

#### Fields and their Data Types

| Field         | Possible Data Values                                                                                                                        |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Title         | Free text                                                                                                                                   |
| Author        | Free text                                                                                                                                   |
| Challenge     | {Autocratization, Disasters, Lack of Trust, Malfunctions, Malicious Online Actions, Malpractices, Marginalization, Violence, Uncategorized} |
| Capacity      | {Assessment, Knowledge, Training}                                                                                                           |
| Prevention    | {✅, ❌}                                                                                                                                    |
| Resilience    | {✅, ❌}                                                                                                                                    |
| Recovery      | {✅, ❌}                                                                                                                                    |
| Gender        | {✅, ❌}                                                                                                                                    |
| Legal         | {✅, ❌}                                                                                                                                    |
| Institutional | {✅, ❌}                                                                                                                                    |
| Management    | {✅, ❌}                                                                                                                                    |

Adding a new value to `challenge` or `capacity` is straightforward. A new `<option>` needs to be added to the relevant group at the top of index.html, in the form:

    <option value="marginalization">Marginalization</option>

Replace `"marginalization"` and `Marginalization` with your value. The first one, lowercase and in quotes, should match what is in the spreadsheet. The second value is what users will see.

Make sure that you are putting new challenge values in the challenge and not the type group, and vice versa. I placed comments in the file to flag where this should happen:

    <!-- ADD NEW CHALLENGE VALUES HERE -->
    <!-- ADD NEW CAPACITY VALUES HERE -->

### Excel Formula

The following formula can be used in Excel or Google Sheets to automatically generate HTML for all resources.

    ="<tr>
        <td class='title' style='width:50' ;'><a href='"&L2&"' target='_blank'>"&B2&"<i class='fa fa-external link'></i></a>
        </td>
        <td class='author'>"&C2&"</td>
        <td class='challenge'>"&C2&"</td>
        <td class='capacity'>"&E2&"</td>
        <td class='prevention'>"&IF(E2="Yes","✅","❌")&"</td>
        <td class='resilience'>"&IF(F2="Yes","✅","❌")&"</td>
        <td class='recovery'>"&IF(G2="Yes","✅","❌")&"</td>
        <td class='gender'>"&IF(H2="Yes","✅","❌")&"</td>
        <td class='legal'>"&IF(E2="Yes","✅","❌")&"</td>
        <td class='institutional'>"&IF(E2="Yes","✅","❌")&"</td>
        <td class='management'>"&IF(E2="Yes","✅","❌")&"</td></tr>"

### Adding Resources

All table items should be pasted from the excel formula column into the index.html file, replacing the current contents, between the `<tbody>` and `</tbody>` tags. (Note that `<tdbody>` is different from `<body>`.) There are also two comments marking this location:

                    <!-- !!!!!!!!!!!!!!!!!!!!!
    START COPY PASTE BELOW HERE
    !!!!!!!!!!!!!!!!!!!!! -->

and

                    <!-- !!!!!!!!!!!!!!!!!!!!!
    END COPY PASTE ABOVE HERE
    !!!!!!!!!!!!!!!!!!!!! -->
