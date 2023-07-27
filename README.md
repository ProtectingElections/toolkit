# Protecting Elections Toolkit

## Development

This page was originally planned to fit in the body of a "Basic page" on the IDEA website, which can contain HTML code. For this reason, it was kept as simple as possible. I.e., a single static HTML page, as little javascript as possible, and styled to match the rest of IDEA's website. (The page directly imports a CSS file from IDEA.)

The number of columns made the table too wide to embed, so it was suggested that the toolkit be put on a separate page. It should be straightforward for a website administrator to upload these files directly. However, idea.int is undergoing a remodel while this toolkit is being created, so the files were stored here for now.

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
        <td class="type">Knowledge</td>
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
| Type          | {Assessment, Knowledge, Training}                                                                                                           |
| Prevention    | {✅, ❌}                                                                                                                                    |
| Resilience    | {✅, ❌}                                                                                                                                    |
| Recovery      | {✅, ❌}                                                                                                                                    |
| Gender        | {✅, ❌}                                                                                                                                    |
| Legal         | {✅, ❌}                                                                                                                                    |
| Institutional | {✅, ❌}                                                                                                                                    |
| Management    | {✅, ❌}                                                                                                                                    |

### Excel Formula

The following formula can be used in Excel or Google Sheets to automatically generate HTML for all resources.

    ="<tr>
        <td class='title' style='width:50' ;'><a href='"&L2&"' target='_blank'>"&B2&"<i class='fa fa-external link'></i></a>
        </td>
        <td class='author'>"&C2&"</td>
        <td class='challenge'>"&C2&"</td>
        <td class='type'>"&E2&"</td>
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
